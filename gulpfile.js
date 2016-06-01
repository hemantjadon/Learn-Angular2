var gulp = require('gulp');
var watch = require('gulp-watch');

var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');

gulp.task('transpile-ts', function () {
    return tsProject.src(['**/*.ts','!node_modules/**','!typings/**'])
        .pipe(tsc(tsProject))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch',function () {
    watch(['**/*.ts','!node_modules/**','!typings/**'],function(){
        gulp.start('transpile-ts');
    });
});
gulp.task('default',['transpile-ts','watch']);
