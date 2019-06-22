const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

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
app.use(require('./routes/unidadMedida'));
app.use(require('./routes/Usuarios'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

