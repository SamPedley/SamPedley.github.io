const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const precss = require('precss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')
var rename = require("gulp-rename")


gulp.task('jekyllBuild', shell.task(['jekyll build --config _config.yml --watch --incremental']));


gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('minImages', () => {
    return gulp.src('_src/_img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/img'));
});



gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
				precss()
    ];
    return gulp.src('_src/_css/main.css')
        .pipe(postcss(processors))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css:critical', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
				precss()
    ];
    return gulp.src('_src/_css/critical.css')
        .pipe(postcss(processors))
        .pipe(rename("critical.css"))
        .pipe(gulp.dest('./_includes'));
});

gulp.task('css:watch', function () {
  gulp.watch('_src/_css/**/*.css',['css','css:critical','jekyllBuild']);
})

gulp.task('default', ['css','css:critical','css:watch', 'jekyllBuild', 'serve']);
