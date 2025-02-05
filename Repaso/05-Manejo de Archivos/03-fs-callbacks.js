const fs = require('node:fs')

// fs.writeFileSync('./prueba.txt', 'Hola Mundo')//recibe directorio donde guardo el archivo
// fs.appendFileSync('./prueba.txt', ' Chau Mundo')// No sobreescribe sino que agrega el contenido al archivo

const path = './pruebaCB.txt';

if(fs.existsSync(path)){ // el metodo existSync es el unico que tenemos para las dos maneras sincronica y asincronica
    fs.readFile(path, 'utf-8',(error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            fs.appendFile(path, 'El archivo existe agrego este segundo texto', error =>{
                if(error){
                    console.log(error);
                }else{
                    console.log('informacion agregada con exito');
                    fs.readFile(path, 'utf-8',(error, info) => {
                        if(error){
                            console.log(error);
                        }else{
                            console.log(info);
                        }
                    })
                }
            })
        }
    });
}else{
    fs.writeFile(path, 'Si no existe el archivo creo este primer texto', (error)=>{
        if(error){
            console.log(error);
        }else{
            console.log('Primer archivo creado con exito');
        }
    })
}
