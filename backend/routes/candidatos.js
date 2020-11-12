const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');


//METODO GET
router.get('/candidatos', (req, res) => {

  mysqlConnection.query('SELECT * FROM tblcandidato ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//METODO POST
router.post('/registrar_candidato', (req, res) => {

  const { nombre, apellidos, cargo, documento, tarjeton } = req.body;

  let candidato = [nombre, apellidos, cargo, documento, tarjeton];

  let nuevoCandidato = `INSERT INTO tblcandidato (nombre, apellidos, cargo, documento, tarjeton)
                    VALUES(?,?,?,?,?)`;
  mysqlConnection.query(nuevoCandidato, candidato, (err, results, fields) => {
    if (err) {
      res.json({ message: `Error ` + err.message, })
      return console.error(err.message);
    }
    res.json({ message: `Candidato registrado`, })
  });
});


//METODO PUT
router.put('/candidato/:documento', (req, res) => {
  const { nombre, apellidos, cargo, tarjeton } = req.body;

  let candidato = [nombre, apellidos, cargo, tarjeton];

  const { documento } = req.params;
  mysqlConnection.query(`UPDATE tblcandidato SET nombre = ?,apellidos = ?, cargo= ?, tarjeton=? WHERE documento = ?`,
    [nombre, apellidos, cargo, documento, tarjeton], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Candidato actualizado' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
      }
    });
});

//DELETE
router.delete('/candidato/:documento', (req, res) => {
  const { documento } = req.params;
  mysqlConnection.query('DELETE FROM tblcandidato WHERE documento = ?',
    [documento], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Candidato eliminado' });
      } else {
        res.json({ status: 'error' + err.message, });
        console.log(err);
      }
    });
});





module.exports = router;
