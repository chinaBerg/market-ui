/* gen-style.js */
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const glob = require('glob')
const path = require('path')

// 打包所有的css
function genCss (cb) {
  gulp.src('../../src/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('market-ui.min.css'))
    .pipe(gulp.dest('../../lib/styles'))
  cb()
}

function copyFonts (cb) {
  gulp.src('../../src/styles/fonts/fonts/*.*')
    .pipe(gulp.dest('../../lib/styles/fonts'))
  cb()
}

const getComponentsName = () => {
  const res = []
  const files = glob.sync(path.join(__dirname, '../../src/lib/*/index.js'))
  files.filter(file => {
    const match = file.match(/src\/lib\/(.*)\/index\.js/)
    const dirName = match && match[1]
    if (dirName && dirName.charAt(0) !== '_') {
      res.push(dirName)
    }
  })
  return res
}

function buildSeperateCss (cb) {
  const files = getComponentsName()

  files.forEach(name => {
    gulp.src(`../../src/styles/components/${name}.less`)
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${name}.css`))
      .pipe(gulp.dest('../../lib/styles'))
  })
  cb()
}

exports.default = gulp.series(genCss, copyFonts, buildSeperateCss)
