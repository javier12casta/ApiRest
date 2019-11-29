import express, { Router } from 'express';

import acudientesController from '../controllers/acudientesController';

class AcudientesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', acudientesController.list);
        this.router.get('/tablaA', acudientesController.TablaA);
        this.router.get('/:id', acudientesController.getOne);
        this.router.post('/', acudientesController.create);
        this.router.put('/:id', acudientesController.update);
        this.router.delete('/:id', acudientesController.delete);
    }

}

export default new AcudientesRoutes().router;