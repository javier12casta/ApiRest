const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos las modalidades
router.get('/Modalidad', (req, res) => {
  mysqlConnection.query('SELECT * FROM modalidad', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo Modalidad por id
router.get('/Modalidad/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM `modalidad` WHERE `idModalidad` = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });


  // Insertar Modalidad
router.post('/ModalidadInsert', (req, res) => {
    const {CodigoModalidad, Estado , idModalidad , Iniciales,NombreModalidad} = req.body;
    console.log(CodigoModalidad, Estado , idModalidad , Iniciales,NombreModalidad); 
       
    mysqlConnection.query('INSERT INTO `modalidad`(`CodigoModalidad`, `Estado` , `idModalidad` , `Iniciales` , `NombreModalidad` ) VALUES (?,?,?,?,?)', [CodigoModalidad, Estado , idModalidad , Iniciales,NombreModalidad], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Modalidad Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });

  //Actualizar Modalidad

router.put('/ModalidadUpdate/:id', (req, res) => {
    const { idModalidad } = req.params;
    const { CodigoModalidad, Estado , Iniciales,NombreModalidad } = req.body;
  
    mysqlConnection.query('UPDATE `modalidad` SET `idModalidad` = ?,`CodigoModalidad` = ? , `Estado` = ?, `Iniciales` = ? , `NombreModalidad` = ?    WHERE `idModalidad` = ?', [CodigoModalidad, Estado ,idModalidad , Iniciales,NombreModalidad ], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Modalidad Actualizada'});
      } else {
        console.log(err);
      }
    });
  });

  // delete Modalidad

router.delete('/ModalidadDelete/:id', (req, res) => {
    const { 
   idModalidad
    } = req.params;
    const{
    CodigoModalidad, Estado , Iniciales,NombreModalidad
    } = req.body
    
    mysqlConnection.query('DELETE FROM `modalidad` WHERE `idModalidad` = ?' , [idModalidad, CodigoModalidad, Estado , Iniciales,NombreModalidad, idModalidad], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'Modalidad Eliminada'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;