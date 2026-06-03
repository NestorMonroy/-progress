/* jshint esnext: true */

const gulp = require('gulp');

require('@progress/kno-typescript-tasks')(gulp, 'kno-inputs-common');

gulp.task('build-ts-package', gulp.series(['build-package', 'build-es2015-bundle']));
