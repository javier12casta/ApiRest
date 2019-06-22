const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Municipios
router.get('/Municipios', (req, res) => {
  mysqlConnection.query('SELECT * FROM municipios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Municipio por id
router.get('/Municipio/:id', (req, res) => {
    const { idMunicipios } = req.params; 
    mysqlConnection.query('SELECT * FROM `municipios` WHERE `idMunicipios` = ?', [idMunicipios], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

// Insertar Municipio
router.post('/MunicipioInsert', (req, res) => {
    const {CentrosZonales_idCentrosZonales, idMunicipios , Municipios} = req.body;
    console.log(CentrosZonales_idCentrosZonales, idMunicipios , Municipios); 
       
    mysqlConnection.query('INSERT INTO `municipios`(`CentrosZonales_idCentrosZonales`, `idMunicipios`, `Municipios`) VALUES (?,?,?)', [CentrosZonales_idCentrosZonales, idMunicipios , Municipios], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Municipio Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });
  
  //Actualizar Municipio

router.put('/MunicipioUpdate/:id', (req, res) => {
    const { idMunicipios } = req.params;
    const { CentrosZonales_idCentrosZonales , Municipios } = req.body;
  
    mysqlConnection.query('UPDATE `municipios` SET `CentrosZonales_idCentrosZonales` = ? , `idMunicipios` = ?,`Municipios` = ? WHERE `idMunicipios` = ?', [CentrosZonales_idCentrosZonales,idMunicipios , Municipios ,idMunicipios ], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Muncipio Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete Municipio

router.delete('/MunicipioDelete/:id', (req, res) => {
    const { 
    idMunicipios
    } = req.params;
    const{
        CentrosZonales_idCentrosZonales , Municipios
    } = req.body
    
    mysqlConnection.query('DELETE FROM `municipios` WHERE `idMunicipios` = ?' , [CentrosZonales_idCentrosZonales, idMunicipios, Municipios , idMunicipios], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'Municipio Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;