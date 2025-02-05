const fs = require('node:fs')

// fs.writeFileSync('./prueba.txt', 'Hola Mundo')//recibe directorio donde guardo el archivo
// fs.appendFileSync('./prueba.txt', ' Chau Mundo')// No sobreescribe sino que agrega el contenido al archivo

const path = './prueba.txt';

if(fs.existsSync(path)){
    const info = fs.readFileSync(path, 'utf-8');
    console.log(info);
    fs.appendFileSync(path, 'si existe agrego este segundo texto')
}else{
    fs.writeFileSync(path, 'Si no existe agrego este primer texto')
    //Desventaja del writeFile
    // si usamos el writeFile sobre el mismo archivo lo que hace es sobreescribir la info 
    //por eso si queremos actualizarla y que la anterior persista tenemos que utilizar el appendFil
}