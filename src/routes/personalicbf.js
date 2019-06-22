const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos personal icbf
router.get('/Personalicbf', (req, res) => {
  mysqlConnection.query('SELECT * FROM personalicbf', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo un personalicbf por id
router.get('/Personalicbf/:id', (req, res) => {
    const { idPersonalICBF } = req.params; 
    mysqlConnection.query('SELECT * FROM `personalicbf` WHERE `idPersonalICBF` = ?', [idPersonalICBF], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  
  
// Insertar Personalicbf
router.post('/PersonalicbfInsert', (req, res) => {
    const {Correo, Direccion , Estado , FechaIngresoICBF , idPersonalICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento } = req.body;
    console.log(Correo, Direccion , Estado , FechaIngresoICBF , idPersonalICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento ); 
       
    mysqlConnection.query('INSERT INTO `personalicbf`(`Correo`, `Direccion`, `Estado` , `FechaIngresoICBF` , `idPersonalICBF`, `NumeroDocumento` ,`PrimerApellido`,`PrimerNombre`,`SegundoApellido`, `Telefono` ,`Telefono2`,`TipoDocumento_idTipoDocumento`  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [Correo, Direccion , Estado , FechaIngresoICBF , idPersonalICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento ], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'personal Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });

  //Actualizar personalicbf

router.put('/PersonaicbfUpdate/:id', (req, res) => {
    const { idPersonalICBF} = req.params;
    const { Correo, Direccion , Estado , FechaIngresoICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento  } = req.body;
  
    mysqlConnection.query('UPDATE `personalicbf` SET `idPersonalICBF` = ?,`Correo` = ?  ,`Direccion` = ? , `Estado` = ? , `FechaIngresoICBF` = ? ,`NumeroDocumento` = ? , `PrimerApellido` = ? , `PrimerNombre` = ? , `SegundoApellido` = ? , `SegundoNombre` = ? , `Telefono` = ? , `Telefono2` = ? , `TipoDocumento_idTipoDocumento` = ? WHERE `idPersonalICBF` = ?', [Correo, Direccion , Estado , FechaIngresoICBF , idPersonalICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento , idPersonalICBF], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'personalicbf Actualizado'});
      } else {
        console.log(err);
      }
    });
  });
  
  // delete personalicbf

router.delete('/PersonalicbfDelete/:id', (req, res) => {
    const { 
        idPersonalICBF
    } = req.params;
    const{
        Correo, Direccion , Estado , FechaIngresoICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento
    } = req.body
    
    mysqlConnection.query('DELETE FROM `personalicbf` WHERE `idPersonalICBF` = ?' , [Correo, Direccion , Estado , FechaIngresoICBF , idPersonalICBF , NumeroDocumento , PrimerApellido , PrimerNombre , SegundoApellido , SegundoNombre , Telefono , Telefono2 , TipoDocumento_idTipoDocumento , idPersonalICBF], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'personalicbf Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;