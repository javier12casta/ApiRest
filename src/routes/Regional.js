const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Regionales
router.get('/Regional', (req, res) => {
  mysqlConnection.query('SELECT * FROM Regional', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Regional por id
router.get('/Regional/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Regional` WHERE `idRegional` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Regional
router.post('/RegionalInsert', (req, res) => {
  const {idRegional, Regional} = req.body;
  console.log(id, Regional); 
     
  mysqlConnection.query('INSERT INTO `Regional`(`idRegional`, `Regional`) VALUES (?,?)', [ id, Regional], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Regional Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Regional g

router.put('/RegionalUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { Regional } = req.body;

  mysqlConnection.query('UPDATE `Regional` SET `idRegional` = ?,`Regional` = ? WHERE `idRegional` = ?', [id, Regional, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Regional Actualizado'});
    } else {
      console.log(err);
    }
  });
});

// delete Rol

router.delete('/RegionalDelete/:id', (req, res) => {
const { 
id 
} = req.params;
const{
Regional
} = req.body

mysqlConnection.query('DELETE FROM `Regional` WHERE `idRegional` = ?' , [id, Regional, id], (err, rows, fields) =>{

if(!err){

res.json({status: 'Regional Eliminado'});

}else{

  console.log(err);
}
});
});

module.exports = router;