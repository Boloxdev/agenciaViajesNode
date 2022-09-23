import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";




const app = express();

//conectar bd
db.authenticate()
  .then(()=> console.log('base de datos conectada'))
  .catch(error=> console.log(error));

//agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true}));


app.use('/', router);
//Habilitar PUG
app.set('view engine', 'pug');




//definir la carpeta publica
app.use(express.static('public'));

//middleware propio
//obtener el año actual
app.use( (req, res, next ) => {
  const year = new Date();
 //res.locals.actualYear = year.getFullYear();
  app.locals.actualYear = year.getFullYear();
  app.locals.nombresitio= "Agencia de viajes";
  
});





let port = 4000;
const portArg = process.argv[2];
 
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
  port = parseInt(portArg, 10);
}
 
app.get("/", (req, res) => {
  res.send("Hello world");
});
 
 
app.listen(port,()=>{
        console.log(`El servidor esta corriendo en ${port}`)
});
