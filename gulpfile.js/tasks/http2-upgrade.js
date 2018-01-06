const gulp = require('gulp')
const log = require('fancy-log')
const colors = require('ansi-colors')
const mergeStream = require('merge-stream')
const path = require('path')
const del  = require('del')

gulp.task('http2-upgrade', function() {
  del([path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.stylesheets.src)], { force: true })
  log(colors.green('Cleaned stylesheets directory'))

  const configStream = gulp.src('extras/http2/**/*')
    .pipe(gulp.dest(process.env.PWD))

  const srcStream = gulp.src(['src/stylesheets', 'src/javascripts', 'src/html'])
   .pipe(gulp.dest(path.join(process.env.PWD, PATH_CONFIG.src)))

  log(colors.green('Created HTTP/2 ready stylesheets directory'))
  log(colors.green('Added some HTTP/2 helpers to the html directory'))
  log(colors.green('Created config/path-config.json'))

  return mergeStream(configStream, srcStream)
})
