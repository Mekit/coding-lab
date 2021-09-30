/**
 * Gulp File .js
 * # good example
 * https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
 */

// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series } = require('gulp');

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');

// https://github.com/adriancooney/node-sfx
const browserSync = require("browser-sync").create();

// In windows, the sfx utility is not working
// turn of this settings to use this project
const soundEffects = false;
if (soundEffects){
  const sfx = require("sfx");
}

// File paths
const files = { 
  html: '*.html',
  sass: './scss/**/*.scss',
  sassPath: './scss/style.scss',
  cssPath: './css/style.css',
}

/* Sound task */
function soundTask(end){
  if (!soundEffects){
    end();
    return;
  }
  // sounds: hero, ping, random
  sfx.play('ping', 5, function() {
    end();
  });
  // sfx.say('all done', function() {
  //  end();
  // });
}

/* Task to compile sass*/
function scssTask(){
  return src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(dest('./css/')
  );  
}

/* Watch Task */
function watchTask(){
  watch(files.html, series(
    browsersyncReload,
    soundTask
  ));
  watch(files.sass,
    series(
      scssTask,
      browsersyncReload,
      soundTask
    )
  );
}

/* Task to init browser sync */
function browsersyncServe(cb){
  browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
      baseDir: "./"
    }
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
  });
  cb();
}

/* A simple task to reload the page */
function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  scssTask,
  browsersyncServe,
  soundTask,
  watchTask,
);