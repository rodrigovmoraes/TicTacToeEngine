const { series } = require('gulp');
const { src, dest } = require('gulp');
const { exec } = require('child_process');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gulpClean = require('gulp-clean');
var Server = require('karma').Server;

function clean(cb) {
   return src(['app/index.min.js', 'output/*.*'], { allowEmpty: true })
          .pipe(gulpClean());
}

function testEngine(cb) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, cb).start();
}

function buildEngine(cb) {
   return src('src/*.js')
          .pipe(concat('TicTacToeEngine.min.js'))
          .pipe(uglify())
          .pipe(dest('output'));
}

function runApp(cb) {
   return exec('node appStart.js');
}

function buildApp(cb) {
   return src(['output/*.js', 'appSrc/tictactoe.js'])
          .pipe(concat('index.min.js'))
          .pipe(uglify())
          .pipe(dest('app'));
}

exports.test = testEngine;
exports.build = buildEngine;
exports.clean = clean;
exports.app = series(clean, buildEngine, buildApp, runApp);
exports.default = series(clean, buildEngine);
