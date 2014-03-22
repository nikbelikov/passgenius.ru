var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso');

var paths = {
    css: ['css/*.css'],
    sass: ['sass/**/*.sass']
};

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(compass({
            css: 'css',
            sass: 'sass'
        }))
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, function(){
        gulp.run('sass');
    });
});

//gulp.task('default', ['compass', 'autoprefixer', 'watch']);