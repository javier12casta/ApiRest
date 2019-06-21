const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/RolPersona'));
app.use(require('./routes/Regional'));
app.use(require('./routes/genero'));
app.use(require('./routes/Comunas'));
app.use(require('./routes/CentroZonal'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});