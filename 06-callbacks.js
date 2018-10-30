const fs = require('fs');
console.log('Inicio');
fs.readFile(
    '06-texto.txt',
    'utf-8',
    (error, textoLeidoDelArchivo)=>{

        if(error){
            try{
                throw new Error(error);
            }catch (e) {
                console.log(e);
            }
                    }else{
           // console.log(textoLeidoDelArchivo);

            fs.writeFile(
                '06-texto.txt',
                textoLeidoDelArchivo + 'mundo',
                    (err)=>{
                    if(err) console.log('Error');
                    console.log('Archivo actualizado');
                    }
            )

        }
     //   console.log(error);
     //   console.log(textoLeidoDelArchivo);

    }

);

console.log('Fin');
