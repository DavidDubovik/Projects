
'use strict'
const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('disClean', function () {
    return gulp.src('./dist/**/', {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('fix', function (){
    return gulp.src('dist/css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});



gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('js', function () {
    return  gulp.src(['./src/js/*.js', './src/js/*.mjs'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

const imgMin = () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('build', gulp.series('disClean', 'sass', 'minify-css','fix', imgMin, 'js'));

gulp.task('server', function () {
    gulp.watch("./src/js/*.js", gulp.series(['js']))
    gulp.watch("./src/scss/*.scss", gulp.series(['sass','minify-css']))

    browserSync.init({
        server: ""
    });



})


gulp.task('dev', gulp.series('server'));
