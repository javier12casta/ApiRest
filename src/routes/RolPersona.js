const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los Roles
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM RolPersona', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Rol
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM RolPersona WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar Rol
router.post('/', (req, res) => {
  const {id, RolPersona, Estado} = req.body;
  console.log(id, RolPersona, Estado);
  const query = `
    SET @id = ?;
    SET @RolPersona = ?;
    SET @Estado = ?;
    CALL RolAddOrEdit(@id, @RolPersona, @Estado);
  `;
  mysqlConnection.query(query, [id, RolPersona, Estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Rol Creado'});
    } else {
      console.log(err);
    }
  });

});

//Actualizar Rol

router.put('/:id', (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @RolPersona = ?;
    SET @Estado = ?;
    CALL RolAddOrEdit(@id, @RolPersona, @Estado);
  `;
  mysqlConnection.query(query, [id, RolPersona, Estado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Rol Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;