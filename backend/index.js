const express = require('express');
const cors = require('cors')
const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const candidatos = require('./routes/candidatos');
const usuarios = require('./routes/usuario');
const votacion = require('./routes/votacion');


app.use('/api', candidatos);
app.use('/api', usuarios);
app.use('/api', votacion);


app.set('json spaces',2);

// Ajustes del servidor
app.set('port',3001);
//opcion1
app.get('/', (req,res)=>{
  res.send('Backend zeapp')
});

app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 

