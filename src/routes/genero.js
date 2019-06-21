const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Regionales
router.get('/Genero', (req, res) => {
  mysqlConnection.query('SELECT * FROM Genero', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Regional por id
router.get('/Genero/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Genero` WHERE `idGenero` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar Rol
router.post('/GeneroInsert', (req, res) => {
  const {id, NombreGenero, Iniciales} = req.body;
  console.log(id, NombreGenero, Iniciales); 
     
  mysqlConnection.query('INSERT INTO `Genero`(`idGenero`, `NombreGenero`, `Iniciales`) VALUES (?,?,?)', [ id, NombreGenero, Iniciales], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Genero Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Rol

router.put('/GeneroUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { NombreGenero, Iniciales } = req.body;

  mysqlConnection.query('UPDATE `Genero` SET `idGenero` = ?,`NombreGenero` = ?,`Iniciales`=? WHERE `idGenero` = ?', [id, NombreGenero, Iniciales, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Genero Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;