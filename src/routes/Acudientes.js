const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Regionales
router.get('/Acudientes', (req, res) => {
  mysqlConnection.query('SELECT * FROM Acudientes', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Acudientes por id
router.get('/Acudientes/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Acudientes` WHERE `idAcudientes` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Acudientes
router.post('/AcudientesInsert', (req, res) => {
  const {id, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, TipoDocumento_idTipoDocumento, Parentesco, Huella, Beneficiarios_idBeneficiarios, Genero_idGenero, FechaNacimiento, FechaIngreso, Correo, Telefono, Telefono2} = req.body;
  console.log(id, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, TipoDocumento_idTipoDocumento, Parentesco, Huella, Beneficiarios_idBeneficiarios, Genero_idGenero, FechaNacimiento, FechaIngreso, Correo, Telefono, Telefono2); 
     
  mysqlConnection.query('INSERT INTO `Acudientes`(`idAcudientes`, `PrimerNombre`, `SegundoNombre`, `PrimerApellido`, `SegundoApellido`, `NumeroDocumento`, `TipoDocumento_idTipoDocumento`, `Parentesco`, `Huella`, `Beneficiarios_idBeneficiarios`, `Genero_idGenero`, `FechaNacimiento`, `FechaIngreso`, `Correo`, `Telefono`, `Telefono2`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
  [ id, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, TipoDocumento_idTipoDocumento, Parentesco, Huella, Beneficiarios_idBeneficiarios, Genero_idGenero, FechaNacimiento, FechaIngreso, Correo, Telefono, Telefono2], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Acudientes Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Acudientes

router.put('/AcudientesUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, TipoDocumento_idTipoDocumento, Parentesco, Huella, Beneficiarios_idBeneficiarios, Genero_idGenero, FechaNacimiento, FechaIngreso, Correo, Telefono, Telefono2 } = req.body;

  mysqlConnection.query('UPDATE `Acudientes` SET `idAcudientes`=?,`PrimerNombre`=?,`SegundoNombre`=?,`PrimerApellido`=?,`SegundoApellido`=?,`NumeroDocumento`=?,`TipoDocumento_idTipoDocumento`=?,`Parentesco`=?,`Huella`=?,`Beneficiarios_idBeneficiarios`=?,`Genero_idGenero`=?,`FechaNacimiento`=?,`FechaIngreso`=?,`Correo`=?,`Telefono`=?,`Telefono2`=? WHERE `idAcudientes`= ?', 
  [id, PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, NumeroDocumento, TipoDocumento_idTipoDocumento, Parentesco, Huella, Beneficiarios_idBeneficiarios, Genero_idGenero, FechaNacimiento, FechaIngreso, Correo, Telefono, Telefono2, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Acudientes Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;