
var gulp = require('gulp');
var clean = require('gulp-rimraf');
var runner = require("gulp-nodeunit-runner");
var mocker = require('gulp-apimocker');

gulp.task('apimocker', () => {
    return mocker.start({
      config: '../node/config-generated.json',
      mockDirectory: '../node/mock'
    });
});

exports.mockLocal = gulp.parallel('apimocker');