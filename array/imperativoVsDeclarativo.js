const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativa
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log('Média das notas: ', total1 / alunos.length)

//Declarativo - permite reaproveitamento pois cada função criada pode ser usada em outros contextos
const getNota = aluno => aluno.nota
const soma = (total2, atual) => total2 + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log('Média das notas: ', total2 / alunos.length)


const a = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 3, 5];
const contaElem = (contador, elem) => Object.assign(contador, {[elem]: (contador[elem] || 0) + 1})
b = a.reduce(contaElem, {});
console.log(b);


const target = { d: 10, b: 5, c: 9 };
const source = { b: 4, c: 5, a: 6};

const returnedTarget = Object.assign(target, source);
const returnedSource = Object.assign(source, target);

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedSource);
// expected output: Object { a: 1, b: 4, c: 5 }


const people = [
    {person: 'Sebastiana', age: 70},
    {person: 'Maria', age: 90},
    {person: 'Carlos', age: 60},
    {person: 'José', age: 76},
    {person: 'Ilda', age: 68},
    {person: 'Vilma', age: 72},
    {person: 'Jeová', age: 75}
]

const older = (bigger, person) => bigger = (bigger.hasOwnProperty('age')) ? (parseInt(person.age) > parseInt(bigger.age)) ? person : bigger : person;
const younger = (smaller, person) => smaller = (smaller.hasOwnProperty('age')) ? (parseInt(person.age) < parseInt(smaller.age)) ? person : smaller : person;

const peopleOlder = people.reduce(older, {});
const peopleYounger = people.reduce(younger, {});

console.log('O mais velho: ', peopleOlder.person);
console.log('O mais jovem: ', peopleYounger.person);