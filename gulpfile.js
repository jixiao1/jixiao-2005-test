//导入gulp
const gulp = require('gulp');

//导入gulp-sass第三方依赖
const sass = require('gulp-sass');

//导入gulp-autoprefixer第三方依赖
const autoprefixer = require('gulp-autoprefixer');

//导入gulp-cssmin第三方依赖
const cssmin = require('gulp-cssmin');
// 导入gulp-uglify这个第三方模块
const uglify=require("gulp-uglify");

//3.2 导入gulp-babel这个第三方模块

  const babel=require("gulp-babel");
//4.1 导入gulp-htmlmin这个第三方模块
const htmlmin = require('gulp-htmlmin');
const { src } = require('vinyl-fs');

//7.1 导入del这个第三方模块
const del = require('del')

//9.1 导入gulp-webserver这个第三方模块
const webserver = require("gulp-webserver");
const { tree } = require('gulp');


//准备一个编译sass文件的函数
const sassHandler = ()=>{
    return gulp.src('./src/sass/*.scss')   //找到所以要编译的sass文件
    .pipe(sass())    //把sass代码转换成css代码
    .pipe(autoprefixer())  //自动添加前缀(你可以做也可以不做)
    .pipe(cssmin())   //把已经转换好的css代码压缩
    .pipe(gulp.dest('./dist/css'))  //放到指定目录
}
// 写一个打包css的方法
const cssHandler = () =>{
    return gulp.src("./src/css/*.css")
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/css"))
}
//3.3 书写一个打包js的方法
  const jsHandler = () =>{
      return gulp.src("./src/js/*.js")
      .pipe(babel({
        presets: ['@babel/env']
    }))
     .pipe(uglify())
     .pipe(gulp.dest("./dist/js"))
  }
//4.2 书写一个打包html的方法
const htmlHandler = ()=>{
    return gulp.src(['./src/pages/*.html','./src/pages/*.htm'])   //找到src目录里面下的pages目录下的所有后缀为.html的文件
    .pipe(htmlmin({
        "removeAttributeQuotes":true,   //移除属性上的双引号
        "removeComments":true,    //移除注释
        "collapseBooleanAttributes":true,  //把值为布尔值的属性简写
        "collapseWhitespace":true, //移除所有空格,变成一行代码
        "minifyCSS":true, //把页面里面的style标签里面的css样式也去空格
        "minifyJS":true,  //把页面里面的script标签里面的js代码也去空格
    })) //压缩
    .pipe(gulp.dest('./dist/pages'))  //把压缩完毕的放到一个指定目录
}
//5.1 书写一个移动images文件夹的方法
 const imgHandler = () =>{
     return gulp.src(['./src/img/**'])
     .pipe(gulp.dest('./dist/img'))
 }
 //6.1 书写一个移动lib文件夹的方法
const libHandler = ()=>{
    return gulp.src('./src/lib/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/lib'))   //放到指定的目录就可以了


}
//书写一个打包json格式的
const jsonHandler= () =>{
    return gulp.src("./src/json/**")
    .pipe(gulp.dest("./dist/json"))
}

//7.2 书写一个任务,自动删除dist目录
const delHandler = ()=>{
    return del(['./dist'])
}

//8.1 自动监控文件
//监控src下面的文件,只要一修改,就执行对应的任务
//比如src下面的css文件夹,只要里面的文件一修改,我就执行一下cssHandler这个任务
const watchHandler = ()=>{
    //监控着src下的css下的所有csswe你按,只要一发生变化,就会自动执行一遍cssHandler这个任务
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/lib/**',libHandler);
    gulp.watch('./src/images/**',imgHandler)
    gulp.watch('./src/json/**',jsonHandler)
}
  const serverHandler = () =>{
      return gulp.src("./dist")
      .pipe(webserver({
          port:'8080',
          open:"./pages/index.html",
          livereload:true
      }))
  }



//单独导出sassHanlder 
// module.exports.sass = sassHandler;
// module.exports.css=cssHandler;
// module.exports.js=jsHandler;
// module.exports.html=htmlHandler;
// module.exports.img=imgHandler;
// module.exports.lib=libHandler;
// module.exports.del=delHandler;
// module.exports.watch=watchHandler;

//合在昨天一起的时候
//就把他也放在default任务里面一块使用就可以了
module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler,libHandler,sassHandler,jsonHandler),
    serverHandler,
    watchHandler
)