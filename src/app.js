const express = require ('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

//configuraciones
app.set ('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Rutas 
require('./routes/userRoutes')(app); 

//archivos estaticos
app.listen(app.get('port'), () => {
    console.log('server on port 3000')
}); 