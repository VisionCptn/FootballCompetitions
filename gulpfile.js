
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify");





// Styles task
// Uglify css
gulp.task("styles", function(){
    gulp.src("app/css/**/*.sass")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("build/css"))
});




// Watch task
// Watches JS
gulp.task("watch", function(){
    gulp.watch("app/css/**/*.sass", ["styles"]);
    //gulp.watch("handlers/**/*.jade", ["jade_templates"]);
});


gulp.task("default", ["styles", "watch"]);

//
//
//gulp.task("styles", function () {
//   gulp.src("app/css/**/**")
//       .pipe(sass().on("error", sass.logError()))
//       .pipe(sass())
//       .pipe(gulp.dest("./build/css"))
//});
//
//gulp.task("uglifyAll", function () {
//    gulp.src("app/css/**/*.sass")
//        .pipe(uglify().on("error", sass.logError()))
//        .pipe(uglify())
//        .pipe(gulp.dest("./build/css"))
//});
//
//gulp.task("watch", function () {
//   gulp.watch("app/css/**/**", ["styles"]);
//});
//
//gulp.task("default", ["uglifyAll"]);