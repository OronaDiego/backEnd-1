//este framework podemos crear servidores mas complejos de manera mas clara y legible 
// y utilizacion de middlewares, que son funciones que se van a ejecutar entre la solicitud del cliente y la respuesta del servidor 
// se ejecuta cunando ingresa esa soliditud y vamos a poder realizar procesos en el medio
// por ejemplo verificar que un endpoint sea para usuarios administradores, usuario estandar
import express, { json } from 'express';
import { products } from './products.js'
import { manager } from './user-manager.js';
const app = express();

app.use(express.urlencoded({extended:true}));
//esta linea v siempre antes de todas las rutas y despues del instanciar express con app
//con este metodo abrimos la recepcion de un middleware, en este caso este es interno que se ejecuta en el momento que el cliente hace una peticion 
// va a plicar a todas las rutas y su funcionalidad es el manejo de las url

app.use(express.json());
// esto es para que identifique los datos de tipo json que se reciben por body
// estos dos mencionados anteriormente van siempre 

//app. el metodo get,put,delete
//recibe dos parametros 
//primero endpoint/ruta
// segundo callback con el objeto req y res
app.get('/',(req,res)=>{
    res.send('Bienvenidos al server con Express') //-> metodo send.
    // res.json() //->para enviar objetos de tipo json
    // res.render() //-> para enviar vistas/plantillas
    // res.redirect() //-> para redireccionar
})
// x cada endpoint/ruta hago app.el metodo http que puede ser get, post, put, delete y recibe dos paramtros
// 1 url
// 2 callback con el objeto request y el objeto response
// y dentro de la llave el proceso que va a realizar el endpoint



// agrego otro endpoint 
// las query se envian ?NombreDeLaQuery=Valor  ?price=2000  -> QueryParams
// app.get('/products',(req,res)=>{
//     // res.status(200).json({data: products})
//     // console.log(req.params); //-> recibo un objeto
//     // console.log(req.query); // -> tambien es un objeto
//     const {price} = req.query //-> para hacer uso de lo que se nos envia por params hay que destructurarlo
//     console.log(price); 
//     if(!price)return res.json(products)
//     const productsFilter = products.filter((p)=>p.price === parseInt(price))
//     // de esta manera filtro en el array de products si el precio de los productos conicide con el price que me envian por paramtro
//     // pero lo tengo que parsear a entero porque me llega como un string
//     console.log(productsFilter);
//     return res.status(200).json(productsFilter)
    
    
// })

//endpoint con params
app.get('/products/:price',(req,res)=>{// le estoy indicando que vamos a recibir un valor en este caso :price
    const {price}= req.params
    if(!price)return res.json(products)
    const productsFilter = products.filter((p)=>p.price === parseInt(price))
    return res.status(200).json(productsFilter)
})

app.get('/products',(req,res)=>{ 
    const {id} = req.query  
    const idFilter = products.filter((i)=> i.id === parseInt(id))
    if(!id)return res.json(products)
    return res.status(200).json(idFilter) 
})

app.get('/users',async(req,res)=>{ // al agregarle el await, esta callback tiene que ser asincrona async
    try {
        const users = await manager.getAllUser(); 
        //-> como en la clase manager en el metodo getAllUser-> como estamos usando metodos asincronos, le tengo que agregar el await
                                                
        res.json(users)   // dentro de ese user voy a tener la respuesta a la llamada al metodo getAllUser
    } catch (error) {//Tratando el error mediante el constructor de errores en la clase manager puedo tratar el error aca
        console.log(error); // no es lo ideal pero debemos tener un control de errores por consola
        res.status(500).json({msg:error.message})// pero tengo que devolver una respuesta acorde al eror
    }// segun el error veo que codigo de estado devuelvo. 
}) 
// Des esta manera tengo el getAllUsers->obtener todos los usuarios desde el endpoint                                    
        
app.get('/users/:id', async(req,res)=>{ 
    try {
        const {id} = req.params  
        const user = await manager.getUserById(id)
        res.json(user) 
    } catch (error) {
        res.status(404).json({mesg:error.message})
    }
})


app.listen(8080, ()=>{console.log('Server corriendo en el puerto 8080');})