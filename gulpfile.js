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

gulp.task('init', function() {
    gulp.src('js/init/*.js')
        .pipe(concat('init.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/assets/'))
});

gulp.task('plugins', function() {
    gulp.src('js/plugins/*.js')
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/assets/'))
});

gulp.task('modules', function() {
    gulp.src(['js/modules/*.js', 'js/functions/*.js'])
        .pipe(concat('modules.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/assets/'))
});

gulp.task('concatjs', function() {
    gulp.src(['js/assets/plugins.min.js', 'js/assets/init.min.js', 'js/assets/modules.min.js'])
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js/assets/'))
});

gulp.task('svgmin', function() {
    return gulp.src('img/svg/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('img/svg/min'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('js', ['init', 'modules', 'concatjs']);
