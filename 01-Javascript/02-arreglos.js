
var arreglo = [1, 2.2, 'hola', true, false, {}, undefined, null, []];

var arregloNumeros = [1, 2, 3];

arregloNumeros[0]; //1
arregloNumeros[2]; //3
arregloNumeros[4]; //fuera de límite

console.log(arregloNumeros[0], arregloNumeros[2], arregloNumeros[4]);

arregloNumeros.push(4);
console.log(arregloNumeros);

arregloNumeros.pop();
console.log(arregloNumeros);

arregloNumeros.splice(0, 1);
console.log(arregloNumeros);

arregloNumeros.splice(0, 0, 0);
console.log(arregloNumeros);

arregloNumeros.splice(2, 0, 1.5);
console.log(arregloNumeros);

var usuario = 1.5;

var indiceUsuario = arregloNumeros.indexOf(usuario);
arregloNumeros.splice(indiceUsuario);
console.log(arregloNumeros);

console.log(arregloNumeros.slice(2, 4));

var arregloNotasPrimerBimestre = [8.5, 9, 4];
var arregloNotasSegundoBimestre = [8.5, 9, 4];
//Destrcuturacion de arreglos
/*var arregloNoTAS2018B = [
        ...arregloNotasPrimerBimestre,
    ...arregloNotasSegundoBimestre
];
*/
console.log(arregloNoTAS2018B);

//Destrcturacion de objetos
var rafael2018A = {
    sexualidad: 0,
    web: 2
};

var rafael2018B = {
    musica: 7,
    moviles: 8
};
/*
var rafael = {
        ...rafael2018A,
    ...rafael2018B
};
*/
console.log('rafael', rafael);