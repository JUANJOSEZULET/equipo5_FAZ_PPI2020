const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');


//usuario get
router.get('/usuarios', (req, res) => {

  mysqlConnection.query('SELECT * FROM tblusuario ',
    (err, rows,
      fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});

//post 
router.post('/usuario', async (req, res) => {
  console.log(req.body)
  const { documento, nombre, clave } = req.body;

  let usuario = [documento, nombre,clave];

  let userFound  = mysqlConnection.query('SELECT * FROM tblusuario WHERE documento=?')
  if(userFound){
    res.json({message: "El usuario ya esta registrado"})
  }else{
    let nuevoUsuario = `INSERT INTO tblusuario(documento,nombre,clave)
                  VALUES(?,?,?)`;
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
      if (err) {
        console.error(err.message);
      }
      
      return res.json({ message: `Usuario registrado`, }).status(201)
    });

  }
});


module.exports = router;
