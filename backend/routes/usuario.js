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
router.post('/nuevo_usuario', (req, res) => {

  const { documento, correo, apellidos, nombre, perfil, clave } = req.body;

  let usuario = [documento, correo, apellidos, nombre, perfil, clave];

  let nuevoUsuario = `INSERT INTO tblusuario(documento,correo,apellidos,nombre,perfil,clave)
                VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Usuario registrado`, })
  });
});







module.exports = router;
