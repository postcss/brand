var gulp = require('gulp');
var sketch = require('gulp-sketch');
var gutil  = require('gulp-util')
var which  = require('npm-which')(__dirname);

gulp.task('sketch', function(){
  try {
    which.sync('sketchtool');
  } catch(error){
    gutil.log(error); return;
  }

  return gulp.src('./src/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg'
    }))
    .pipe(gulp.dest('./dist/'));
});

