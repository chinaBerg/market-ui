const path = require('path');
const glob = require('glob');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const stylesOutput = path.join(__dirname, '../../lib/styles');
const stylesEntry = path.join(__dirname, '../../src/styles');

// generate base.css file for babel-plugin-component
function genBaseCss(next) {
  const baseCssPath = path.join(stylesEntry, 'base.less');
  gulp.src(baseCssPath)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('base.css'))
    .pipe(gulp.dest(stylesOutput));
  next();
}

// generate components cssfiles
function genSeperateCss(next) {
  // 读取所有组件的css路径
  const entryFiles = glob.sync(path.join(stylesEntry, 'components/*.less'));

  entryFiles.forEach((filePath) => {
    const match = filePath.match(/src\/styles\/components\/(.+)\.less/);
    const name = match && match[1];
    gulp.src(filePath)
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${name}.css`))
      .pipe(gulp.dest(stylesOutput));
  });
  next();
}

// generate index.css file
function genAllCss(next) {
  const cssEntry = path.join(stylesEntry, 'index.less');
  gulp.src(cssEntry)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('index.css'))
    .pipe(gulp.dest(stylesOutput));
  next();
}

// copy fonts resources
function copyFonts(next) {
  const fontEntry = path.join(stylesEntry, 'fonts/fonts/*.*');
  const fontOutput = path.join(stylesOutput, 'fonts');
  gulp.src(fontEntry)
    .pipe(gulp.dest(fontOutput));
  next();
}

exports.default = gulp.series(
  genAllCss,
  copyFonts,
  genBaseCss,
  genSeperateCss,
);
