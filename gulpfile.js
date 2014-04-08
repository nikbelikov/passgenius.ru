var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify');

var paths = {
    sass: ['sass/**/*.sass'],
    js: ['js/**/*.js']
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

gulp.task('uglify', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/lib'))
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['uglify']);

    // gulp.watch(paths.sass, function(){
    //     gulp.run('sass');
    // });
});

gulp.task('default', ['sass', 'uglify']);