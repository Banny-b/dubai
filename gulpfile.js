const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const maps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const clean = require('gulp-clean');
const fs = require('fs');
const changed = require('gulp-changed');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function handleError(task) {
    return function(err) {
        notify.onError({
            title: `${task} Error`,
            message: 'Error: <%= error.message %>',
            sound: false
        })(err);
        console.error(`${task} Error`, err.message);
        this.emit('end');
    };
}

// Task for Pug (pug to html)
gulp.task('pug', function compilePug() {
    return gulp
        .src('./src/*.pug')
        .pipe(changed('./docs', {hasChanged: changed.compareContents}))
        .pipe(plumber({errorHandler: handleError('PUG')}))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./docs/'))
        .pipe(browserSync.stream());
});

// Task for Scss
gulp.task('sass', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(changed('./docs/css/'))
        .pipe(plumber({errorHandler: handleError('Styles')}))
        .pipe(maps.init())
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(maps.write())
        .pipe(gulp.dest('./docs/css/'))
        .pipe(browserSync.stream());
});

// Task for JavaScript
gulp.task('js', function() {
    return gulp
        .src('./src/js/*.js')
        .pipe(changed('./docs/js/'))
        .pipe(plumber({errorHandler: handleError('JavaScript')}))
        .pipe(maps.init())
        .pipe(uglify())
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./docs/js/'))
        .pipe(browserSync.stream());
});

// Task for Fonts
gulp.task('fonts', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(changed('./docs/fonts/'))
        .pipe(plumber({errorHandler: handleError('Fonts')}))
        .pipe(gulp.dest('./docs/fonts/'));
});

// Task for Images
gulp.task('img', function() {
    return gulp
        .src('./src/images/**/*')
        .pipe(changed('./docs/images/'))
        .pipe(plumber({errorHandler: handleError('Images')}))
        .pipe(gulp.dest('./docs/images/'));
});

// Task for Library
gulp.task('library', function() {
    return gulp
        .src('./src/libs/**/*')
        .pipe(changed('./docs/libs/'))
        .pipe(plumber({errorHandler: handleError('Library')}))
        .pipe(gulp.dest('./docs/libs/'));
});

// Task for clean docs
gulp.task('clean', function(done) {
    if (fs.existsSync('./docs/')) {
        return gulp
            .src('./docs/', {read: false, allowEmpty: true})
            .pipe(clean({force: true}))
            .on('error', handleError('Clean'));
    }
    done();
});

// Task for Watch
gulp.task('watch', function(done) {
    gulp.watch('./src/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
    gulp.watch('./src/images/**/*', gulp.series('img'));
    gulp.watch('./src/libs/**/*', gulp.series('library'));
    done();
});

// Task for Server with BrowserSync
gulp.task('server', function(done) {
    browserSync.init({
        server: {
            baseDir: './docs/'
        }
    });
    gulp.watch('./src/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
    gulp.watch('./src/images/**/*', gulp.series('img'));
    gulp.watch('./src/libs/**/*', gulp.series('library'));
    gulp.watch('./docs/*.html').on('change', browserSync.reload);
    done();
});

// Task Default
gulp.task('default', 
    gulp.series('clean', gulp.parallel('pug', 'sass', 'js', 'fonts', 'img', 'library'),
    gulp.parallel('server', 'watch')
));
