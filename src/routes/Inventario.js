const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Inventarios
router.get('/Inventario', (req, res) => {
  mysqlConnection.query('SELECT * FROM Inventario', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Inventario por id
router.get('/Inventario/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Inventario` WHERE `idInventario` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Inventario
router.post('/InventarioInsert', (req, res) => {
  const {id, NumeroLote, Cantidad, FechaIngreso, FechaSalida, UDS_idUDS} = req.body;
  console.log(id, NumeroLote, Cantidad, FechaIngreso, FechaSalida, UDS_idUDS); 
     
  mysqlConnection.query('INSERT INTO `Inventario`(`idInventario`, `NumeroLote`, `Cantidad`, `FechaIngreso`, `FechaSalida`, `UDS_idUDS`) VALUES (?,?,?,?,?,?)', [ id, NumeroLote, Cantidad, FechaIngreso, FechaSalida, UDS_idUDS], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Inventario Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Inventario

router.put('/InventarioUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { NumeroLote, Cantidad, FechaIngreso, FechaSalida, UDS_idUDS } = req.body;

  mysqlConnection.query('UPDATE `Inventario` SET `idInventario`=?,`NumeroLote`=?,`Cantidad`=?,`FechaIngreso`=?,`FechaSalida`=?,`UDS_idUDS`=? WHERE `idInventario`=?', [id, NumeroLote, Cantidad, FechaIngreso, FechaSalida, UDS_idUDS, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Inventario Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;