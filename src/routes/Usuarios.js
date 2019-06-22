const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET todos los usuarios
router.get('/Usuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET un solo usuario por id
router.get('/Usuarios/:id', (req, res) => {
    const { idUsuarios } = req.params; 
    mysqlConnection.query('SELECT * FROM `usuarios` WHERE `idUsuarios` = ?', [ idUsuarios ], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
  

  // Insertar usuario
router.post('/UsuariosInsert', (req, res) => {
    const {Contraseña , idUsuarios , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona} = req.body;
    console.log(Contraseña , idUsuarios , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona); 
       
    mysqlConnection.query('INSERT INTO `usuarios`(`Contraseña` ,` idUsuarios` , `NombreUusario `, `PersonalICBF_idPersonaICBF` , `RolPersona_idRolPersona`) VALUES (?,?,?,?,?)', [Contraseña , idUsuarios , NombreUusario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'usuario Creado'});
      } else {
        console.log(err); 
      }
    });  
   
  });
  
  //Actualizar usuario

router.put('/UsuarioUpdate/:id', (req, res) => {
    const { idUsuarios } = req.params;
    const { Contraseña , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona } = req.body;
  
    mysqlConnection.query('UPDATE `usuarios` SET `Contraseña`= ? , `idUsuarios`=?  `NombreUsuario` = ? , `PersonalICBF_idPersonaICBF`= ? , `RolPersona_idRolPersona`= ? WHERE `idUsuarios = ?', [idUsuarios,Contraseña , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona,  idUsuarios], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Regional Actualizado'});
      } else {
        console.log(err);
      }
    });
  });

  // delete Rol

router.delete('/UsuarioDelete/:id', (req, res) => {
    const { 
        idUsuarios
    } = req.params;
    const{
        Contraseña , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona
    } = req.body
    
    mysqlConnection.query('DELETE FROM `usuarios` WHERE `idUsuarios` = ?' , [idUsuarios,Contraseña , NombreUsuario , PersonalICBF_idPersonaICBF , RolPersona_idRolPersona,idUsuarios], (err, rows, fields) =>{
    
    if(!err){
    
    res.json({status: 'usuario Eliminado'});
    
    }else{
    
      console.log(err);
    }
    });
    });
    
    module.exports = router;