// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var cache = require('gulp-cache');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

// Concatenate & Minify JS
gulp.task('scripts', function() {
   gulp
    .src(['dev/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

/*
gulp.task('scripts-form-controllers', function() {
  return gulp
    .src(['js/form_controller.js'])
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
*/
 //Concatenate & Minify CSS
gulp.task('minify-css', function() {
   gulp
    .src('dev/css/*.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'));
});

//gulp.task('sass', function() {
//  return gulp
//    .src('./sass/**/master.scss')
//    .pipe(rename('style.css'))
//    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
//    .pipe(gulp.dest('css'));
//});

// Copy Fonts
//gulp.task('copy-fonts', function() {
//  return gulp.src('fonts/*').pipe(gulp.dest('build/fonts'));
//});

// Copy videos
//gulp.task('copy-videos', function() {
//  return gulp.src('video/*.gif').pipe(gulp.dest('build/video'));
//});

/*
// copy robots-txt
gulp.task('robots-txt', function() {
  return gulp.src('robots.txt').pipe(gulp.dest('build'));
});

// copy copy-token
gulp.task('copy-token', function() {
  return gulp.src('token').pipe(gulp.dest('build'));
});

// copy sitemap
gulp.task('sitemap', function() {
  return gulp.src('sitemap.xml').pipe(gulp.dest('build'));
});
*/
//image optimization
//gulp.task('images', function() {
//  return gulp
//    .src('img/**/*')
//    .pipe(
//      cache(
//        imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })
//      )
//    )
//    .pipe(gulp.dest('build/img'));
//});

//html minify
gulp.task('minifyHTML', function() {
   gulp
    .src('dev/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

// Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('dev/js/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch('dev/css/*.css', ['minify-css']);

  // Watch video folder
  //gulp.watch('video/*', ['copy-videos']);

  // Watch video folder
  //gulp.watch('fonts/*', ['copy-fonts']);

  // Watch image files
  //gulp.watch('/dev/img/**/*', ['images']);

  //watch for html changes
  gulp.watch('dev/*.html', ['minifyHTML']);

  //saas
  //gulp.watch('sass/**/*', ['sass', 'minify-css']);
});

gulp.task('default', ['scripts','minify-css','minifyHTML', 'watch']);
