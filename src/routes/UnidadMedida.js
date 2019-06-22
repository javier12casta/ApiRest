const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todas las unidades de medida
router.get('/UnidadMedida', (req, res) => {
  mysqlConnection.query('SELECT * FROM unidadmedida', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET una sola unidad de medida por id
router.get('/UnidadMedida/:id', (req, res) => {
  const { idUnidadMedida } = req.params; 
  mysqlConnection.query('SELECT * FROM `unidadmedida` WHERE `idUnidadMedida` = ?', [idUnidadMedida], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar unidad de medida
router.post('/UnidadMedidaInsert', (req, res) => {
  const {idUnidadMedida, Iniciales , UnidadMedida} = req.body;
  console.log(idUnidadMedida, Iniciales , UnidadMedida); 
     
  mysqlConnection.query('INSERT INTO `unidadmedida`(`idUnidadMedida`, `Iniciales` , `UnidadMedida`) VALUES (?,?,?)', [ idUnidadMedida, Iniciales,UnidadMedida ], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'unidad de medida Creada'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar unidad medida

router.put('/UnidadMeidaUpdate/:id', (req, res) => {
  const { idUnidadMedida } = req.params;
  const { Iniciales , UnidadMedida } = req.body;

  mysqlConnection.query('UPDATE `unidadmedida` SET `idUnidadMedida` = ?,`Iniciales` = ? ,`UnidadMedida` = ? WHERE `idRegional` = ?', [idUnidadMedida, Iniciales , UnidadMedida, idUnidadMedida], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'unidad de medida Actualizado'});
    } else {
      console.log(err);
    }
  });
});

// delete unidad de medida

router.delete('/UnidadMedidaDelete/:id', (req, res) => {
  const { 
    idUnidadMedida
  } = req.params;
  const{
    Iniciales , UnidadMedida
  } = req.body
  
  mysqlConnection.query('DELETE FROM `unidadmedida` WHERE `idUnidadMedida` = ?' , [idUnidadMedida,Iniciales , UnidadMedida, idUnidadMedida], (err, rows, fields) =>{
  
  if(!err){
  
  res.json({status: 'unidad de medida Eliminado'});
  
  }else{
  
    console.log(err);
  }
  });
  });
  
  module.exports = router;