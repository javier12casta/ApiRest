const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Roles
router.get('/Rol', (req, res) => {
  mysqlConnection.query('SELECT * FROM RolPersona', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Rol
router.get('/Rol/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `RolPersona` WHERE `idRolPersona` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar Rol
router.post('/RolInsert', (req, res) => {
  const {id, RolPersona, Estado} = req.body;
  console.log(id, RolPersona, Estado); 
     
  mysqlConnection.query('INSERT INTO `RolPersona`(`idRolPersona`, `RolPersona`, `Estado`) VALUES (?,?,?)', [ id, RolPersona, Estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Rol Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Rol

router.put('/RolUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { RolPersona, Estado } = req.body;

  mysqlConnection.query('UPDATE `RolPersona` SET `idRolPersona`= ?,`RolPersona`= ?,`Estado`=? WHERE `idRolPersona`= ?', [id, RolPersona, Estado, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Rol Actualizado'});
    } else {
      console.log(err);
    }
  });
});

// delete Rol

router.delete('/RolDelete/:id', (req, res) => {
  const { id } = req.params;
  const { RolPersona, Estado } = req.body;

  mysqlConnection.query('DELETE FROM `RolPersona` WHERE `idRolPersona`= ?', [id, RolPersona, Estado, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Rol Borrado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;