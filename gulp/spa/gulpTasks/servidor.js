const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imsg/**/*.*', () => gulp.series('appIMG')())
    return cb()
}



module.exports = {
    monitorarArquivos,
    servidor
}