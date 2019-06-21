const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Beneficiarios
router.get('/Beneficiarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM Beneficiarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Beneficiario por id
router.get('/Beneficiarios/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Beneficiarios` WHERE `idBeneficiarios` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Beneficiario
router.post('/BeneficiariosInsert', (req, res) => {
  const {id, TipoDocumento_idTipoDocumento, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, Estado, FechaIngreso, FechaNacimiento, Modalidad_idModalidad, Genero_idGenero} = req.body;
  console.log(id, TipoDocumento_idTipoDocumento, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, Estado, FechaIngreso, FechaNacimiento, Modalidad_idModalidad, Genero_idGenero); 
     
  mysqlConnection.query('INSERT INTO `Beneficiarios`(`idBeneficiarios`, `TipoDocumento_idTipoDocumento`, `PrimerNombre`, `SegundoNombre`, `PrimerApellido`, `SegundoApellido`, `NumeroDocumento`, `Estado`, `FechaIngreso`, `FechaNacimiento`, `Modalidad_idModalidad`, `Genero_idGenero`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', 
  [ id, TipoDocumento_idTipoDocumento, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, Estado, FechaIngreso, FechaNacimiento, Modalidad_idModalidad, Genero_idGenero], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Beneficiario Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Beneficiario

router.put('/BeneficiariosUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { TipoDocumento_idTipoDocumento, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, Estado, FechaIngreso, FechaNacimiento, Modalidad_idModalidad, Genero_idGenero } = req.body;

  mysqlConnection.query('UPDATE `Beneficiarios` SET `idBeneficiarios`=?,`TipoDocumento_idTipoDocumento`=?,`PrimerNombre`=?,`SegundoNombre`=?,`PrimerApellido`=?,`SegundoApellido`=?,`NumeroDocumento`=?,`Estado`=?,`FechaIngreso`=?,`FechaNacimiento`=?,`Modalidad_idModalidad`=?,`Genero_idGenero`=? WHERE `idBeneficiarios`=?', 
  [id, TipoDocumento_idTipoDocumento, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, Estado, FechaIngreso, FechaNacimiento, Modalidad_idModalidad, Genero_idGenero, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Beneficiario Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;