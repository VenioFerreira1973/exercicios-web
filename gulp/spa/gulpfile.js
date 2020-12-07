const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appHtml, appCss, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)