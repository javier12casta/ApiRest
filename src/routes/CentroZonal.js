const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los centroszonales
router.get('/CentroZonal', (req, res) => {
  mysqlConnection.query('SELECT * FROM CentrosZonales', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo CentroZonal por id
router.get('/CentroZonal/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `CentrosZonales` WHERE `idCentrosZonales` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// Insertar Centro Zonal
router.post('/CZInsert', (req, res) => {
  const {id, CentrosZonales, Regional_idRegional, CodigoJerarquiaCZ, CodigoCZ} = req.body;
  console.log(id, CentrosZonales, Regional_idRegional, CodigoJerarquiaCZ, CodigoCZ); 
     
  mysqlConnection.query('INSERT INTO `CentrosZonales`(`idCentrosZonales`, `CentrosZonales`, `Regional_idRegional`, `CodigoJerarquiaCZ`, `CodigoCZ`) VALUES (?,?,?,?,?)', [ id, CentrosZonales, Regional_idRegional, CodigoJerarquiaCZ, CodigoCZ], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Centro Zonal Creado'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Centro Zonal

router.put('/CZUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { CentrosZonales, Regional_idRegional, CodigoJerarquiaCZ, CodigoCZ } = req.body;

  mysqlConnection.query('UPDATE `CentrosZonales` SET `idCentrosZonales`=?,`CentrosZonales`=?,`Regional_idRegional`=?,`CodigoJerarquiaCZ`=?,`CodigoCZ`=? WHERE `idCentrosZonales`=?', [id, CentrosZonales, Regional_idRegional, CodigoJerarquiaCZ, CodigoCZ, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Centro Zonal Actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;