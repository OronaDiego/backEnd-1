const fs = require('node:fs') // se le puede agrgar .promises y directamente no es necesario
                         // poner fs.promises-> directamente usamos el fs
const path= './prueba.txt';

const manejarArchivo = async()=>{
    try {
        if(fs.existsSync(path)){
            const info= await fs.promises.readFile(path, 'utf-8');
            console.log(info);

            await fs.promises.appendFile(path,'segundo texto')
            console.log('texto agregado con exito');
            
        }else{
            await fs.promises.writeFile(path, 'primer texto')
            console.log('archivo creado con exito');
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

manejarArchivo()