// 08-promesas.js
const fs = require('fs');

const promesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    );
};

const promesaEscritura = (
    nombreArchivo,
    contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
};

console.log(promesa);
promesa('07-texto.txt')
    .then(
        (contenido) => {
            console.log('Ok', contenido);
            return promesaEscritura(
                '07-texto.txt',
                contenido + 'Nuevo Contenido');
            // Promesa
        }
    )
    .then(
        (contenidoCompleto) => {
            console.log(contenidoCompleto);
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error);
        }
    );


//convertir apendFile a promesa
//Deber: transformar el for each a promesa



const appendFile =(
    nombreArchivo,
    contenidoArchivo
)=> {
    if(error){
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    nombreArchivo,
                    'utf-8',
                    (error, contenidoLeido) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(contenidoLeido);
                        }
                    }
                );
            }
        )}
    else{
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    nombreArchivo,
                    contenidoArchivo,
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(contenidoArchivo);
                        }
                    }
                );
            }
        )
    }
};

console.log(promesa);
promesa('07-texto.txt')
    .then(
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
    )
    .then(
        (contenidoCompleto) => {
            console.log(contenidoCompleto);
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error);
        }
    );
