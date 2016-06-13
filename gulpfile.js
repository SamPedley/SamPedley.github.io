const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const child = require('child_process');
const gutil = require('gulp-util');


gulp.task('jekyllServe', function(){
  const jekyll = child.spawn('jekyll', ['serve',
  '--watch',
  '--incremental',
  '--drafts'
]);

gulp.task('jekyllBuild', shell.task(['jekyll build']));


const jekyllLogger = (buffer) => {
  buffer.toString()
    .split(/\n/)
    .forEach((message) => gutil.log('Jekyll: ' + message));
};

jekyll.stdout.on('data', jekyllLogger);
jekyll.stderr.on('data', jekyllLogger);
});

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

    return gulp.src('_src/_scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename("main.css"))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css:critical', function () {
    return gulp.src('_src/_scss/critical.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename("critical.css"))
        .pipe(gulp.dest('./_includes'));
});

gulp.task('css:watch', function () {
  gulp.watch('_src/_css/**/*.css',['css','css:critical','jekyllServe']);
})

gulp.task('default', ['css','css:critical','css:watch', 'jekyllServe', 'serve']);
gulp.task('build',['css','css:critical', 'jekyllBuild' ])
