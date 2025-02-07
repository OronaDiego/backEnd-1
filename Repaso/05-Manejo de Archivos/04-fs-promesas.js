const fs = require("node:fs");
const { json } = require("node:stream/consumers");

const path = "./pruebaPromesa.txt";

// if (fs.existsSync(path)) {
//   // recordemos que el existsSync solo viene de manera sincronica
//   fs.promises
//     .readFile(path, "utf-8")
//     .then((info) => {
//       // aca necesitamos adicionarle el .promises para decirle que manejamos promesas y
//       console.log(info); //de esta manera el metodo fileSystem no se queda esperando a que le pasemos un terer parametro, la callback
//       return fs.promises.appendFile(path, "Agregando segundo texto, al archivo ya creado");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   // si existe el archivo, va a leer la informacion, nos muestra la info y nos retorna una nueva promesa AGREGANDO INFORMACION
// } else {
//   fs.promises
//     .writeFile(path, "Creando primer texto y archivo")
//     .then(() => console.log("archivo Creado"))
//     .catch((error) => console.log(error));
// }


// Para comunicarnos entre el back y front siempre vamos a utilizaro formato json
const product = {
    name:'iphone',
    price:500,
    stock: 10
}
// objeto de tipo JavaScript, para guardarlo en un archiv json tenemos que parsearlo 
// formatearlo como tipo json 
//TEXTO PLANO DE TIPO JSON
// {
//     "name":'iphone',
//     "price":500,
//     "stock": 10
// }

const products = [
    {
        name:'iphone',
        price:500,
        stock: 10
    },
    {
        name:'ipad',
        price:300,
        stock: 1
    }
]

const pathJSON = './products.json';
// de esta manera transformamos el objeto tipo javascript a json para guardarlo en el archivo
fs.writeFileSync(pathJSON, JSON.stringify(products));
const info = fs.readFileSync(pathJSON, 'utf-8');
//para manipularlo, como por ejemplo realizar un map mpara poder mostrarlo necesitamos Parsearlo y 
//trasnformarlo a objeto tipo javascript
const infoJS = JSON.parse(info)
console.log(`info convertido a json: ${info}`);
console.log('--------------------------------------');
console.log('info paraseado a objeto JS');
console.log(infoJS);

//Este metodo borra el archivo completo 
fs.unlinkSync(infoJS)

