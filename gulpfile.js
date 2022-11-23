const { watch, series, src, dest } = require("gulp")
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano")
const autoprefixer = require("gulp-autoprefixer")
const fileInclude = require("gulp-file-include")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

function htmlTask(cb) {
  src("app/*.html")
    .pipe(fileInclude())
    .pipe(dest("dist"));

  browserSync.reload()
  cb()
}

function scssTask(cb) {
  src("app/scss/*.scss")
    .pipe(concat("style.scss"))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"))

  browserSync.reload()
  cb()
}

function scriptsTask(cb) {
  src("app/js/*.js")
    .pipe(concat("scripts.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/js"))

  browserSync.reload()
  cb()
}
function openTask(cb) {
  browserSync.init({
    server: {
      baseDir: "dist/"
    }
  });
}

exports.default = series(htmlTask, scssTask, scriptsTask, openTask);
watch("app/html/*.html", htmlTask)
watch("app/*.html", htmlTask)
watch("app/js/*.js", scriptsTask)
watch("app/scss/*.scss", scssTask)
