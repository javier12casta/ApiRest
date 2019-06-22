const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los tipos de documentos
router.get('/TipoDocumento', (req, res) => {
  mysqlConnection.query('SELECT * FROM tipodocumento', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo un tipo de documento por id
router.get('/TipoDocumento/:id', (req, res) => {
    const { idTipoDocumento } = req.params; 
    mysqlConnection.query('SELECT * FROM `tipodocumento` WHERE `idTipoDocumento` = ?', [idTipoDocumento], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  
// Insertar tipodocumento
router.post('/TipoDocumentoInsert', (req, res) => {
    const {idTipoDocumento, Iniciales , NombreTipo} = req.body;
    console.log(idTipoDocumento, Iniciales , NombreTipo); 
       
    mysqlConnection.query('INSERT INTO `tipodocumento`(`idTipoDocumento`, `Iniciales`, `NombreTipo`) VALUES (?,?,?)', [idTipoDocumento, Iniciales , NombreTipo], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'tipo de documento Creado'});
      } else {
        console.log(err); 
      }
    });  
});

//Actualizar tipodocumento

router.put('/TipoDocumentoUpdate/:id', (req, res) => {
    const { idTipoDocumento } = req.params;
    const {Iniciales , NombreTipo } = req.body;
  
    mysqlConnection.query('UPDATE `tipodocumento` SET `idTipoDocumento` = ?,`Iniciales` = ? ,`NombreTipo` = ? WHERE `idTipoDocumento` = ?', [ idTipoDocumento ,Iniciales , NombreTipo , idTipoDocumento ], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'tipo de documento Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete tipo de documento

router.delete('/TipoDocumentoDelete/:id', (req, res) => {
    const { 
        idTipoDocumento
    } = req.params;
    const{
        Iniciales , NombreTipo
    } = req.body
    
    mysqlConnection.query('DELETE FROM `tipodocumento` WHERE ` idTipoDocumento` = ?' , [ idTipoDocumento, Iniciales , NombreTipo,  idTipoDocumento], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'tipo de documento Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;