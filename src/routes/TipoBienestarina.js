const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los tipos de bienestarina
router.get('/TipoBienestarina', (req, res) => {
  mysqlConnection.query('SELECT * FROM tipobienestarina', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo un tipo de bienestarina por id
router.get('/TipoBienestarina/:id', (req, res) => {
    const { idTipoBienestarina } = req.params; 
    mysqlConnection.query('SELECT * FROM `tipobienestarina` WHERE `idTipoBienestarina` = ?', [idTipoBienestarina], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  // Insertar tipobienestarina
router.post('/TipoBienestarinaInsert', (req, res) => {
    const {idTipoBienestarina, TipoBienestarina} = req.body;
    console.log(idTipoBienestarina, TipoBienestarina); 
       
    mysqlConnection.query('INSERT INTO `tipobienestarina`(`idTipoBienestarina`, `TipoBienestarina`) VALUES (?,?)', [ idTipoBienestarina, TipoBienestarina], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'tipo de bienestarina Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });


  //Actualizar tipobienestarina

router.put('/TipoBienestarinaUpdate/:id', (req, res) => {
    const { idTipoBienestarina } = req.params;
    const {  TipoBienestarina} = req.body;
  
    mysqlConnection.query('UPDATE `tipobienestarinA` SET `idTipoBienestarina ` = ?,` TipoBienestarina` = ? WHERE `idTipoBienestarina` = ?', [idTipoBienestarina, TipoBienestarina , idTipoBienestarina], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Tipo de bienestarina Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete Rol

router.delete('/TipoBienestarinaDelete/:id', (req, res) => {
    const { 
        idTipoBienestarina
    } = req.params;
    const{
        TipoBienestarina
    } = req.body
    
    mysqlConnection.query('DELETE FROM `tipobienestarina` WHERE `idTipoBienestarina` = ?' , [idTipoBienestarina, TipoBienestarina , idTipoBienestarina], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'tipo de bienestarina Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;