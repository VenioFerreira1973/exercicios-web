const gulp = require('gulp')
/* const series = gulp.series -- desta forma a execuçao é serial */
const {series, parallel} = require('gulp') //desta forma a execução será mista podendo executar parte em serie parte em paralelo

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa depois 2!')
    return cb()
}


const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

function copiar(cb){
    console.log('Tarefa de copiar!')
    
    //desta forma o gulp copia os arquivos especificados da pasta especificada para uma pastaB de destino
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    
    //desta forma o gulp executará a copia da pasta A para uma pastaB de destino copiando 
    //todas as subpastas da pastaA que contenham arquivos com a extensão .txt bem como as pastas que os contenham
    gulp.src('pastaA/**/*.txt') 
        //a função pipe permite a execução de outras funções nos arquivos antes de efetivamente serem copiados
        //por exemplo: .pipe(transformaTxt()) - onde a função transformaTxt pode fazer uma transformação qualquer nos arquivos
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
    )

