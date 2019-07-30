const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
app.use(require('./routes/Modalidad'));
app.use(require('./routes/Municipios'));
app.use(require('./routes/personalicbf.js'));
app.use(require('./routes/PuntoEntrega'));
app.use(require('./routes/RolPersona'));
app.use(require('./routes/Regional'));
app.use(require('./routes/TipoBienestarina'));
app.use(require('./routes/TipoDocumento'));
app.use(require('./routes/UDS'));
app.use(require('./routes/UnidadMedida'));
app.use(require('./routes/Usuarios'));
app.use(require('./routes/genero'));
app.use(require('./routes/Comunas'));
app.use(require('./routes/CentroZonal'));
app.use(require('./routes/Barriosveredas'));
app.use(require('./routes/Inventario'));
app.use(require('./routes/Entrega'));
app.use(require('./routes/Bienestarina'));
app.use(require('./routes/Beneficiarios'));
app.use(require('./routes/Acudientes'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

