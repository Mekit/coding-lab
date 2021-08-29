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
const browserSync = require("browser-sync").create();

// File paths
const files = { 
  sass: './scss/**/*.scss',
  sassPath: './scss/style.scss',

  cssPath: './css/style.css',
}

// https://github.com/adriancooney/node-sfx
function sound(end){
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
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(dest('./css/')
  );  
}

/* Watch Task */
function watchSass(){
  browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
      baseDir: "./"
    }
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
  });

  watch(files.sass, {interval: 1000, usePolling: true}, // Makes docker work
    series(
      compileSass,
      reload,
      sound,
    )
  );    
}

// A simple task to reload the page
function reload(done) {
  browserSync.reload();
  done();
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  compileSass,
  sound,
  watchSass,
);