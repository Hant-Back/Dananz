const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Шляхи
const paths = {
  scss: 'scss/style.scss',
  css: 'css'
};

// Функція компіляції SCSS
function compileSCSS() {
  return src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.css));
}

// Слідкування за змінами
function watchFiles() {
  watch('scss/**/*.scss', compileSCSS);
}

exports.default = series(compileSCSS, watchFiles);
