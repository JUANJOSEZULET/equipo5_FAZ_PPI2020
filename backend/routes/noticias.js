const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

//METODO GET
router.get('/noticia', (req, res) => {

  mysqlConnection.query('SELECT * FROM tbnoticia ',
    (err, rows,
      fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});

//METODO GET
router.get('/noticia/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM tbnoticia WHERE id = ?', [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

//METODO POST
router.post('/nueva_noticia', (req, res) => {

  const { id, descripcion, fecha_registro, usuario_creador, estado} = req.body;
  let noticia = [id, descripcion, fecha_registro, usuario_creador, estado];

  let nuevaNoticia = `INSERT INTO tbnoticia(id, descripcion, fecha_registro, usuario_creador, estado) VALUES(?,?,?,?,?)`;
  mysqlConnection.query(nuevaNoticia, noticia, (err, results,
    fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Noticia creada`, })
  });
});

//METODO PUT 
router.put('/noticia/:id', (req, res) => {
  const { descripcion, fecha_registro, usuario_creador, estado} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE tbnoticia SET  descripcion = ?, fecha_registro = ?, usuario_creador =? , estado = ?
  WHERE id = ?`,
    [id, descripcion, fecha_registro, usuario_creador, estado], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Noticia actualizada' });
      } else {
        console.log(err);
      }
    });
});

// DELETE
router.delete('/noticia/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM tbnoticia WHERE id = ?',
    [id], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Noticia eliminada' });
      } else {
        console.log(err);
      }
    });
});






module.exports = router;
