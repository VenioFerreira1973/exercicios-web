const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //ao imprimir no console o javascript converte o objeto em um JSON textual, a função soma não é incluída

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) -- não é um formato válido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) -- não é um formato válido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))// este é o formato correto para geração de um objeto JSON a partir de um texto

console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}, "e": [], "f": 1.6}'))//formato válido

//console.log(JSON.parse('{"a": 1, "b": \'String\', "c": true, "d": {}, "e": [], "f": 1.6}'))//formato inválido os caracteres scape no JSON não funcionam qualquer string precisa ser delimitada por aspas duplas






