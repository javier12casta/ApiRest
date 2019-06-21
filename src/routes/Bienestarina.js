const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Bienestarina
router.get('/Bienestarina', (req, res) => {
  mysqlConnection.query('SELECT * FROM Bienestarina', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Bienestarina por id
router.get('/Bienestarina/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Bienestarina` WHERE `idBienestarina` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Bienestarina
router.post('/BienestarinaInsert', (req, res) => {
  const {id, Nombre, Sabor, TipoBienesterina_idTipoBienesterina, UnidadMedida_idUnidadMedida, Inventario_idInventario, FechaVencimiento, CantidadMedida, UnidadPrincipal, Estado, Referencia, CodigoBienestarina, FechaRegistro, Valor} = req.body;
  console.log(id, Nombre, Sabor, TipoBienesterina_idTipoBienesterina, UnidadMedida_idUnidadMedida, Inventario_idInventario, FechaVencimiento, CantidadMedida, UnidadPrincipal, Estado, Referencia, CodigoBienestarina, FechaRegistro, Valor); 
     
  mysqlConnection.query('INSERT INTO `Bienestarina`(`idBienestarina`, `Nombre`, `Sabor`, `TipoBienesterina_idTipoBienesterina`, `UnidadMedida_idUnidadMedida`, `Inventario_idInventario`, `FechaVencimiento`, `CantidadMedida`, `UnidadPrincipal`, `Estado`, `Referencia`, `CodigoBienestarina`, `FechaRegistro`, `Valor`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
  [ id, Nombre, Sabor, TipoBienesterina_idTipoBienesterina, UnidadMedida_idUnidadMedida, Inventario_idInventario, FechaVencimiento, CantidadMedida, UnidadPrincipal, Estado, Referencia, CodigoBienestarina, FechaRegistro, Valor], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Bienestarina Creada'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Bienestarina

router.put('/BienestarinaUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { Nombre, Sabor, TipoBienesterina_idTipoBienesterina, UnidadMedida_idUnidadMedida, Inventario_idInventario, FechaVencimiento, CantidadMedida, UnidadPrincipal, Estado, Referencia, CodigoBienestarina, FechaRegistro, Valor } = req.body;
  
  mysqlConnection.query('UPDATE `Bienestarina` SET `idBienestarina`=?,`Nombre`=?,`Sabor`=?,`TipoBienesterina_idTipoBienesterina`=?,`UnidadMedida_idUnidadMedida`=?,`Inventario_idInventario`=?,`FechaVencimiento`=?,`CantidadMedida`=?,`UnidadPrincipal`=?,`Estado`=?,`Referencia`=?,`CodigoBienestarina`=?,`FechaRegistro`=?,`Valor`=? WHERE `idBienestarina`= ?',
  [id, Nombre, Sabor, TipoBienesterina_idTipoBienesterina, UnidadMedida_idUnidadMedida, Inventario_idInventario, FechaVencimiento, CantidadMedida, UnidadPrincipal, Estado, Referencia, CodigoBienestarina, FechaRegistro, Valor, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Bienestarina Actualizada'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;