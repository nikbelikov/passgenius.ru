var gulp = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    svgmin = require('gulp-svgmin'),
    concat = require('gulp-concat');

var paths = {
    sass: ['sass/**/*.sass'],
    js: ['js/**/*.js'],
    svg: ['img/svg/**/*.svg']
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

gulp.task('plugins', function() {
    gulp.src('js/plugins/*.js')
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/lib/'))
});

gulp.task('svgmin', function() {
    return gulp.src('img/svg/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('img/svg/min'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['uglify']);
});

gulp.task('default', ['sass', 'uglify']);