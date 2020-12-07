const schedule = require('node-schedule')

//*/5 - significa que a tarefa será executada de 5 em 5 segundos - usar somente 5 significa que será executado uma vez no segundo 5
//09 - significa que a tarefa será executada a partir das 9:00 horas
//2 - significa terça feira - 0 - domingo, 1 - segunda.....
// * * - não foi definido dia e mês portanto será exeutado em todos os dias e meses sem distinção 
const tarefa1 = schedule.scheduleJob('*/2 * 11 * * 2', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')

}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //1 a 5 significa de segunda a sexta
regra.hour = 11
regra.second = 2

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})