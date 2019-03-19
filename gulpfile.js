var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("sass", function (cb)
{
    gulp.src("./src/scss/custom.scss")
        .pipe(sass())
        .pipe(gulp.dest(function (f)
        {
            return "./dist/css/";
        }));
    cb();
});

gulp.task("watch", gulp.series("sass", function (cb)
{
    gulp.watch("./src/scss/custom.scss", gulp.series("sass"));
    gulp.watch("./src/scss/fragments/*.scss", gulp.series("sass"));
    cb();
}));