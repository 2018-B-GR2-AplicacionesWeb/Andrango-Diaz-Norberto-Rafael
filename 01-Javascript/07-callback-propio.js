const fs = require('fs');
let contenidoFinal = 'Inicial';
function appendFile(nombreArchivo, contenidoArchivo, callback){
    //1 -> Leer archivo
    //2.1 -> Si existe, concatenamos
    //2.2 -> Si no existe, creamos el archivo
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeido) =>{
            if(error){
                const contenido = contenidoArchivo;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) =>{
                        if(err){
                            console.log('Error',err);
                        }else{
                            callback(undefined, contenido);
                            callback(err);
                        }
                    }
                );
                //escribir el archivo
            } else{
                const contenido = contenidoLeido + contenidoArchivo;
                //
                fs.writeFile(nombreArchivo,
                    contenido,
                    (err) =>{
                        if(err){
                            console.log('Error',err);
                            callback(err);
                        }else{
                            callback(undefined, contenido);

                        }
                    });


            }


        }

    )

}


const respuesta = appendFile('07-texto.txt', '\nHola', (error, contenidoTexto) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(contenidoTexto)
    }

});


function ejercicio(arregloStrings, callback){
    const arregloRespuestas = [];
    arregloStrings.forEach(
        (string, indice)=>{
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenidoArchivo = 'string';

            fs.writeFile(nombreArchivo,
                contenidoArchivo,
                (err)=>{
                    const respuesta = {
                        nombreArchivo:nombreArchivo,
                        contenidoArchivo:contenidoArchivo,
                        error:err
                    };
                    arregloRespuestas.push(respuesta);
                    const terminoElArreglo = arregloStrings.length == arregloRespuestas.length;
                    if(terminoElArreglo){
                        callback(arregloRespuestas);
                    }
                })
        }

    );

}


ejercicio (['A', 'B', 'C'],
    (arregloRespuestas)=>{
        console.log(arregloRespuestas);
    })
