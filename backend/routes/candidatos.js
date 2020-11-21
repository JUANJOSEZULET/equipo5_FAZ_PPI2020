const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');


//METODO GET
router.get('/contralores', (req, res) => {

  mysqlConnection.query('SELECT cargo,apellidos,nombre,tarjeton, imagen FROM tblcandidato WHERE cargo="contralor"', (err, rows, fields) => {
    if (err) {
      console.log(err);
    }
    return res.json(rows).status(200);
  });
});
router.get('/personeros', (req, res) => {

  mysqlConnection.query('SELECT cargo,apellidos,nombre,tarjeton, imagen FROM tblcandidato WHERE cargo="personero"', (err, rows, fields) => {
    if (err) {
      console.log(err);
    }
    return res.json(rows).status(200);
  });
});


//METODO POST
router.post('/candidatos', (req, res) => {

  const { nombre, apellidos, cargo, documento, tarjeton, imagen } = req.body;

  let candidato = [nombre, apellidos, cargo, documento, tarjeton, imagen];

  let nuevoCandidato = `INSERT INTO tblcandidato (nombre, apellidos, cargo, documento, tarjeton, imagen)
                    VALUES(?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoCandidato, candidato, (err, results, fields) => {
    if (err) {
      res.json({ message: `Error ` + err.message, })
      return console.error(err.message);
    }
    res.json({ message: `Candidato registrado`, success: true }).status(201)
  });
});


//METODO PUT
router.put('/candidatos/:documento', (req, res) => {
  const { nombre, apellidos, cargo, tarjeton, imagen } = req.body;

  let candidato = [nombre, apellidos, cargo, tarjeton, imagen];

  const { documento } = req.params;
  mysqlConnection.query(`UPDATE tblcandidato SET nombre = ?,apellidos = ?, cargo= ?, tarjeton=?, imagen = ?WHERE documento = ?`,
    [nombre, apellidos, cargo, documento, tarjeton, imagen], (err, rows, fields) => {
      if (err) {
        res.json({ status: 'error' + err.message, });
      }
      return res.json({ status: 'Candidato actualizado', success: true });
    });
});

//DELETE
router.delete('/candidatos/:documento', (req, res) => {
  const { documento } = req.params;
  mysqlConnection.query('DELETE FROM tblcandidato WHERE documento = ?',
    [documento], (err, rows, fields) => {
      if (err) {
        res.json({ status: 'error' + err.message, });
      }
      return res.json({ status: 'Candidato eliminado', success: true });
    });
});





module.exports = router;
