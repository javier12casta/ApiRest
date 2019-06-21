const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todas las entregas
router.get('/Entrega', (req, res) => {
  mysqlConnection.query('SELECT * FROM Entrega', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Entrega por id
router.get('/Entrega/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM `Entrega` WHERE `idEntrega` = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
 
// Insertar Entrega
router.post('/EntregaInsert', (req, res) => {
  const {id, CantidadEntregada, UDS_idUDS, Beneficiarios_idBeneficiarios, PersonalICBF_idPersonalICBF, Inventario_idInventario, FechaEntrega, Acudientes_idAcudientes, EstadoEntrega} = req.body;
  console.log(id, CantidadEntregada, UDS_idUDS, Beneficiarios_idBeneficiarios, PersonalICBF_idPersonalICBF, Inventario_idInventario, FechaEntrega, Acudientes_idAcudientes, EstadoEntrega); 
     
  mysqlConnection.query('INSERT INTO `Entrega`(`idEntrega`, `CantidadEntregada`, `UDS_idUDS`, `Beneficiarios_idBeneficiarios`, `PersonalICBF_idPersonalICBF`, `Inventario_idInventario`, `FechaEntrega`, `Acudientes_idAcudientes`, `EstadoEntrega`) VALUES (?,?,?,?,?,?,?,?,?)', [ id, CantidadEntregada, UDS_idUDS, Beneficiarios_idBeneficiarios, PersonalICBF_idPersonalICBF, Inventario_idInventario, FechaEntrega, Acudientes_idAcudientes, EstadoEntrega], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Entrega Creada'});
    } else {
      console.log(err); 
    }
  });  
 
});

//Actualizar Regional

router.put('/EntregaUpdate/:id', (req, res) => {
  const { id } = req.params;
  const { CantidadEntregada, UDS_idUDS, Beneficiarios_idBeneficiarios, PersonalICBF_idPersonalICBF, Inventario_idInventario, FechaEntrega, Acudientes_idAcudientes, EstadoEntrega } = req.body;

  mysqlConnection.query('UPDATE `Entrega` SET `idEntrega`=?,`CantidadEntregada`=?,`UDS_idUDS`=?,`Beneficiarios_idBeneficiarios`=?,`PersonalICBF_idPersonalICBF`=?,`Inventario_idInventario`=?,`FechaEntrega`=?,`Acudientes_idAcudientes`=?,`EstadoEntrega`=? WHERE `idEntrega` = ?', [id, CantidadEntregada, UDS_idUDS, Beneficiarios_idBeneficiarios, PersonalICBF_idPersonalICBF, Inventario_idInventario, FechaEntrega, Acudientes_idAcudientes, EstadoEntrega, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Entrega Actualizada'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;