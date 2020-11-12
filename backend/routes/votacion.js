const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

//get votacion
router.get('/votacion', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM tblvotacion ', 
  (err, rows,
    fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});
// post votacion
router.post('/votar',(req,res)=>{

  const { id,documento,tarj_contralor,tarj_personero,apellidos,nombre,fecha} = req.body;
  
  let votacion = [ id,documento,tarj_contralor,tarj_personero,apellidos,nombre,fecha];
  
  let nuevaVotacion = `INSERT INTO tblvotacion( id,documento,tarj_contralor,tarj_personero,apellidos,nombre,fecha)
                    VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(nuevaVotacion,votacion, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`voto registrado`, })
    });
  });




module.exports = router;
