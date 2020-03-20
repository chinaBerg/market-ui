'use strict';
const path = require('path');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const glob = require('glob');

function genMinCss (next) {
  const cssEntry = path.join('../../src/styles/index.less');
  const cssOutput = path.join('../../lib/styles');
  gulp.src(cssEntry)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('market-ui.min.css'))
    .pipe(gulp.dest(cssOutput));
  next();
};

function copyFonts (next) {
  const fontEntry = path.join(__dirname, '../../src/styles/fonts/fonts/*.*');
  const fontOutput = path.join(__dirname, '../../lib/styles/fonts')
  gulp.src(fontEntry)
    .pipe(gulp.dest(fontOutput))
  next()
}

exports.default = gulp.series(
  genMinCss,
  copyFonts,
  // buildSeperateCss
);
