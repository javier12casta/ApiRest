const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los UDS
router.get('/UDS', (req, res) => {
  mysqlConnection.query('SELECT * FROM uds', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo UDS por id
router.get('/UDS/:id', (req, res) => {
    const { idUDS } = req.params; 
    mysqlConnection.query('SELECT * FROM `uds` WHERE `idUDS ` = ?', [idUDS], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  // Insertar UDS
router.post('/UdsInsert', (req, res) => {
    const {BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono} = req.body;
    console.log(BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono); 
       
    mysqlConnection.query('INSERT INTO `uds`(`BarriosVeredas_idBarriosVeredas`, `CodigoExternoUDS` , `CodigoInternoUDS` , `Direccion `, `Estado` , `idUDS `, `NombreUDS` , `NombreEntrega_idPuntoEntrega`, `ResponsableUDS `, `SuplenteUDS`,`Telefono`) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'UDS Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });

  //Actualizar UDS

router.put('/UdsUpdate/:id', (req, res) => {
    const {  idUDS  } = req.params;
    const { BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono } = req.body;
  
    mysqlConnection.query('UPDATE `uds` SET `idUDS ` = ?,`Regional` = ? WHERE `idUDS` = ?', [idUDS,BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono, idUDS], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'UDS Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete Rol

router.delete('/UdsDelete/:id', (req, res) => {
    const { 
        idUDS
    } = req.params;
    const{
        BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono
    } = req.body
    
    mysqlConnection.query('DELETE FROM `uds` WHERE `idUDS` = ?' , [idUDS, BarriosVeredas_idBarriosVeredas, CodigoExternoUDS , CodigoInternoUDS , Direccion , Estado , idUDS , NombreUDS , NombreEntrega_idPuntoEntrega, ResponsableUDS , SuplenteUDS,Telefono, idUDS], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'UDS Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;