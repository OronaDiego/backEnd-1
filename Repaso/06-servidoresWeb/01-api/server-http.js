//const http = require('node:http') // para trabajar con el require que es de commonJS no tenemos que hacer ninguna configuracion 
//porque node ya biene con este commonJs que es un conjunto de convenciones sobre el sistema de modulos de JS

// para iniciar trabajando con import y export tenemos que configurarlo desde el package.json y agregar la opcion 
// type: "Modules" con eso ya podemos utilizar import y export 
import { products } from './products.js';
import http from 'node:http';
import { users } from './users.js';
//para crear el primer servidor uso el metodo createServer que recime dos parametros req y res
//request y response
//request -> nos llega sierta informacion del usuario y datos que nos envia el usuario ej: parametro de buscqueda, id de un prducto para hacer una busqueda de un producto
// response -> fabricamos la respuesta a la req
const app = http.createServer((req,res)=>{
    console.log(req.method); //-> retorna el metodo que en este caso es GET
    console.log(req.url); //-> retorna la url que se ingrese en la barra de navegacion 
    if(req.url === '/'){
        res.end('Home')
    }
    if(req.url === "/products"){
        res.writeHead(200,{'Content-Type': 'aplicattion/json'})// de esta manera informo el codigo de estatus y que lo devuelva en formato JSON
        res.end(JSON.stringify(products))           //ademas de tambien hacer el strungify
    }
    if(req.url === '/users'){
        res.writeHead(200,{'Content-Type': 'aplicattion/json'})
        res.end(JSON.stringify(users))
    }
})
//el servidor va a estar escuchando solicitudes del cliente y para esto necesito ocupar un puerto en particular 
//en nuestra pc, con el metodo liseten
// cada software que se ejecuta en nuestro sistema operativo ocupa un puerto 
// y existe un rango de puertos que podemos ocupar, entre el 3000 y 5000 - 8000 y 9000 puertos libres
//existe un metodo que nos devuelve un puerto aleatorio que este sin usar
app.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080');
})


