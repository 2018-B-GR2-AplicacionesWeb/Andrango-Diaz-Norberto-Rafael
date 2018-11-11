function sumarDosNumeros(numeroUno, numeroDos){
    var numeroUnoEsNumber = typeof  numeroUno == "number";
    var numeroDosEsNumber = typeof numeroDos == "number";
    if(numeroUniEsNumber && numeroDosEsNumber){
        return numeroUno + numeroDos;
    } else{

        return 0;   }

}
/*
//envío otros parametros
sumarDosNumeros('a', null);
//no envío parámetros
sumarDosNumeros();
//envío parametros extra
sumarDosNumeros(1,2,3,4,5,6);
console.log(sumarDosNumeros(1,2,3,4,5,6)); //mal
console.log(sumarDosNumeros(null, 'asd')); //mal
console.log(sumarDosNumeros(2,3)); //5
*/

function saludar(){
    console.log('Hola a todos')

}

console.log(saludar()); //undefined -> void

function sumarNumeros(...parametros){
    console.log(parametros);
}

sumarNumeros(1,2,3,4);


function saludar(nombre){

    return `Hola ${nombre.toUpperCase()}`;
}

function saludar(nombre, funcionMensajeria){
    var saludo = `Hola ${nombre.toUpperCase()}`;
    funcionMensajeria(saludo);
    return saludo;
}

console.log(nombre, imprimirEnConsola());

function imprimirEnConsola(texto){
    console.log(texto);
}