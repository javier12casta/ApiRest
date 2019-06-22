const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los puntos de entrega
router.get('/PuntoEntrega', (req, res) => {
  mysqlConnection.query('SELECT * FROM puntoentrega', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo punto de entrega por id
router.get('/PuntoEntrega/:id', (req, res) => {
    const { idPuntoEntrega } = req.params; 
    mysqlConnection.query('SELECT * FROM `puntoentrega` WHERE `idPuntoEntregal` = ?', [idPuntoEntrega], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

// Insertar puntoentrega
router.post('/PuntoEntregaInsert', (req, res) => {
    const {CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono} = req.body;
    console.log(CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono); 
       
    mysqlConnection.query('INSERT INTO `puntoentrega`(`CodigoExternoPE`, `CodigoInternoPE` , `Direccion` ,`Estado`,`idPuntoEntrega` , `NombrePE`, `Responsable`, `Suplente` ,`Telefono` ) VALUES (?,?,?,?,?,?,?,?,?)', [ CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'punto de entrega Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });

  //Actualizar punto de entrega

router.put('/RegionalUpdate/:id', (req, res) => {
    const { idPuntoEntrega } = req.params;
    const { CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono } = req.body;
  
    mysqlConnection.query('UPDATE `puntoentrega` SET `CodigoExternoPE` = ?, `CodigoInternoPE` = ?, `Direccion` = ?, `Estado` = ?, `idPuntoEntrega` = ? , `NombrePE` = ? , `Responsable` = ? , `Suplente` = ? , `Telefono` = ?  WHERE `idPuntoEntrega` = ?', [CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono , idPuntoEntrega], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'punto de entrega Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete punto de entrega

router.delete('/PuntoEntregaDelete/:id', (req, res) => {
    const { 
        idPuntoEntrega
    } = req.params;
    const{
        CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono
    } = req.body
    
    mysqlConnection.query('DELETE FROM `puntoentrega` WHERE `idPuntoEntrega` = ?' , [CodigoExternoPE, CodigoInternoPE  , Direccion , Estado , idPuntoEntrega , NombrePE , Responsable , Suplente , Telefono , idPuntoEntrega], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'punto de entrega Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;