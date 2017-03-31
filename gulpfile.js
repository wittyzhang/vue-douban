// 导入工具包
var gulp = require('gulp'),
  sass = require('gulp-sass');

// scss任务
gulp.task('sass', function(){
  return gulp.src('src/assets/css/main.scss') // 获取该任务需要的文件
         .pipe(sass()) // 该任务调用的模块
         .pipe(gulp.dest('src/assets/css')) // 将在 dest 里面的文件夹下面输出 main.css文件
})

// 默认任务
gulp.task('default', ['sass','watch1']);

// 监听文件
gulp.task('watch1', function(){
  return gulp.watch('src/assets/css/main.scss', ['sass']);
})