const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Regionales
router.get('/Comunas', (req, res) => {
  mysqlConnection.query('SELECT * FROM Comunas', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET una sola comuna por id
router.get('/Comunas/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Comunas` WHERE `idComunas`=?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar comuna
router.post('/ComunasInsert', (req, res) => {
  const {id, Comunas, Municipios_idMunicipios} = req.body;
  console.log(id, Comunas, Municipios_idMunicipios); 
     
  mysqlConnection.query('INSERT INTO `Comunas`(`idComunas`, `Comunas`, `Municipios_idMunicipios`) VALUES (?,?,?)', [ id, Comunas, Municipios_idMunicipios], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Comuna Creada'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar comuna

router.put('/ComunasUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { Comunas, Municipios_idMunicipios} = req.body;

  mysqlConnection.query('UPDATE `Comunas` SET `idComunas` =?, `Comunas` =? ,`Municipios_idMunicipios`=? WHERE `idComunas` =?', [id, Comunas, Municipios_idMunicipios, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Comuna Actualizada'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;