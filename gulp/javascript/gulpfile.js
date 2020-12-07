const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,//elimina comentários do código
            presets: ["env"] //utiliza a versão mais atual do javascript
        }))
        .pipe(uglify())//aplica mimificação - elimina espaços desnecessarios
        .on('error', err => console.log(err))//tratativa de erro caso aconteça 
        .pipe(concat('codigo.min.js'))//concatena o codigo
        .pipe(gulp.dest('build'))

    //return cb() pode ser chamado o return neste ponto do código não muda nada
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}
//é possível executar em paralelo substituindo series por parallel neste caso também é necessário incluir parallel no import const {series, parallel} = require('gulp')
exports.default = series(transformacaoJS, fim)

