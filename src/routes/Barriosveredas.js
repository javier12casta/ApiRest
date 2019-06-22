const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los BarriosVeredas
router.get('/BV', (req, res) => {
  mysqlConnection.query('SELECT * FROM BarriosVeredas', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo BarriosVeredas por id
router.get('/BV/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `BarriosVeredas` WHERE `idBarriosVeredas` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Barrio o Vereda
router.post('/BVInsert', (req, res) => {
  const {id, BarriosVeredas, Comunas_idComunas} = req.body;
  console.log(id, BarriosVeredas, Comunas_idComunas); 
     
  mysqlConnection.query('INSERT INTO `BarriosVeredas`(`idBarriosVeredas`, `BarriosVeredas`, `Comunas_idComunas`) VALUES (?,?,?)', [ id, BarriosVeredas, Comunas_idComunas], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Barrio o Vereda Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Barrio o Vereda

router.put('/BVUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { BarriosVeredas, Comunas_idComunas } = req.body;

  mysqlConnection.query('UPDATE `BarriosVeredas` SET `idBarriosVeredas` = ?,`BarriosVeredas` = ?, `Comunas_idComunas`=?  WHERE `idBarriosVeredas` = ?', [id, BarriosVeredas, Comunas_idComunas, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Barrio o Vereda Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;