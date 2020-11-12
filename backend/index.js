const express = require('express');
const app = express();


// Middlewares
app.use(express.json());

const candidatos = require('./routes/candidatos');
const usuario = require('./routes/usuario');
const votacion = require('./routes/votacion');

app.use('/api', candidatos);
app.use('/api', usuario);
app.use('/api', votacion);
app.set('json spaces',2);

// Ajustes del servidor
app.set('port',3001);
//opcion1
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 


app.get('/', (req,res)=>{
  res.send('Backend zeapp')
});