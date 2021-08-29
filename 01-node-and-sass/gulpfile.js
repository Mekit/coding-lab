/**
 * Gulp File .js
 * # good example
 * https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
 */

// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
const fancylog = require( 'fancy-log' );

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const sfx = require("sfx");

// File paths
const files = { 
  sass: './scss/**/*.scss',
  sassPath: './scss/style.scss',

  cssPath: './css/style.css',
}

// https://github.com/adriancooney/node-sfx
function done(end){
  // sounds: hero, ping, random
  sfx.play('ping', 5, function() {
    end();
  });
  // sfx.say('all done', function() {
  //  end();
  // });
}

/* Task to compile sass*/
function compileSass(){
  return src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer([
      "Android 2.3",
      "Android >= 4",
      "Chrome >= 20",
      "Firefox >= 24",
      "Explorer >= 8",
      "iOS >= 6",
      "Opera >= 12",
      "Safari >= 6"
    ]))
    .pipe(dest('./css/')
  );  
}

/* Watch Task */
function watchSass(){
  watch(files.sass, {interval: 1000, usePolling: true}, // Makes docker work
    series(
      compileSass,
      done,
    )
  );    
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  compileSass,
  done,
  watchSass,
);