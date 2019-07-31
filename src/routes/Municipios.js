const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Municipios
router.get('/Municipios', (req, res) => {
  mysqlConnection.query('SELECT * FROM Municipios', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM `Municipios` WHERE `idMunicipios` = ?', [idMunicipios], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

// Insertar Municipio
router.post('/MunicipioInsert', (req, res) => {
    const {idMunicipios, Municipio, CentrosZonales_idCentrosZonales} = req.body;
    console.log(CentrosZonales_idCentrosZonales, Municipio, idMunicipios ); 
       
    mysqlConnection.query('INSERT INTO `Municipios`(`idMunicipios`, `Municipio`,`CentrosZonales_idCentrosZonales`) VALUES (?,?,?)', [ idMunicipios , Municipio, CentrosZonales_idCentrosZonales], (err, rows, fields) => {
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
    const { CentrosZonales_idCentrosZonales , Municipio } = req.body;
  
    mysqlConnection.query('UPDATE `Municipios` SET `idMunicipios` = ? ,`CentrosZonales_idCentrosZonales` = ? ,`Municipio` = ? WHERE `idMunicipios` = ?', [CentrosZonales_idCentrosZonales,idMunicipios , Municipio ,idMunicipios ], (err, rows, fields) => {
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
    
    mysqlConnection.query('DELETE FROM `Municipios` WHERE `idMunicipios` = ?' , [CentrosZonales_idCentrosZonales, idMunicipios, Municipios , idMunicipios], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'Municipio Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;