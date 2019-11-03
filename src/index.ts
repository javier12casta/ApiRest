import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Import Routs
import indexRoutes from './routes/indexRoutes';
import generoRoutes from './routes/generoRoutes';
import acudientesRoutes from './routes/acudientesRoutes';
import almacenesRoutes from './routes/almacenesRoutes';
import barriosRoutes from './routes/barriosRoutes';
import beneficiariosRoutes from './routes/beneficiariosRoutes';
import bienestarinaRoutes from './routes/bienestarinaRoutes';
import centrosDRoutes from './routes/centrosDRoutes';
import centrosZRoutes from './routes/centrosZRoutes';
import comunasRoutes from './routes/comunasRoutes';
import consecutivoIRoutes from './routes/consecutivoIRoutes';
import consecutivoMRoutes from './routes/consecutivoMRoutes';
import datosRoutes from './routes/datosRoutes';
import entregaRoutes from './routes/entregaRoutes';
import inventarioRoutes from './routes/inventarioRoutes';
import listaCRoutes from './routes/listaCRoutes';
import listaPRoutes from './routes/listaPRoutes';
import listaMRoutes from './routes/listaMRoutes';
import municipioRoutes from './routes/municipioRoutes';
import permisosRoutes from './routes/permisosRoutes';
import personalRoutes from './routes/personalRoutes';
import puntoRoutes from './routes/puntoRoutes';
import regionalRoutes from './routes/regionalRoutes';
import reportesRoutes from './routes/reportesRoutes';
import rolRoutes from './routes/rolRoutes';
import tbienestarinaRoutes from './routes/tbienestarinaRoutes';
import tdocumentoRoutes from './routes/tdocumentoRoutes';
import udsRoutes from './routes/udsRoutes';
import unidadRoutes from './routes/unidadRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import biometricoRoutes from './routes/biometricoRoutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    //Global  variables 
    global():void {
        this.app.use((res,req,next)=>{
            next();
        });
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/genero', generoRoutes);
        this.app.use('/acudiente', acudientesRoutes);
        this.app.use('/almacen', almacenesRoutes);
        this.app.use('/barrio', barriosRoutes);
        this.app.use('/beneficiario', beneficiariosRoutes);
        this.app.use('/bienestarina', bienestarinaRoutes);
        this.app.use('/centrosD', centrosDRoutes);
        this.app.use('/centrosZ', centrosZRoutes);
        this.app.use('/comuna', comunasRoutes);
        this.app.use('/consecutivoI', consecutivoIRoutes);
        this.app.use('/consecutivoM', consecutivoMRoutes);
        this.app.use('/datos', datosRoutes);
        this.app.use('/entrega', entregaRoutes);
        this.app.use('/inventario', inventarioRoutes);
        this.app.use('/listaC', listaCRoutes);
        this.app.use('/listaP', listaPRoutes);
        this.app.use('/listaM', listaMRoutes);
        this.app.use('/municipio', municipioRoutes);
        this.app.use('/permisos', permisosRoutes);
        this.app.use('/personal', personalRoutes);
        this.app.use('/punto', puntoRoutes);
        this.app.use('/regional', regionalRoutes);
        this.app.use('/reporte', reportesRoutes);
        this.app.use('/rol', rolRoutes);
        this.app.use('/tbienestarina', tbienestarinaRoutes);
        this.app.use('/tdocumento', tdocumentoRoutes);
        this.app.use('/uds', udsRoutes);
        this.app.use('/unidad', unidadRoutes);
        this.app.use('/usuario', usuariosRoutes);
        this.app.use('/biometrico', biometricoRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
