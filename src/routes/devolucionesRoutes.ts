import express, { Router } from 'express';

import devolucionesController from '../controllers/devolucionesController';

class DevolucionesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', devolucionesController.list);
        this.router.get('/tabla', devolucionesController.devoluciontabla);
        this.router.get('/:id', devolucionesController.getOne);
        this.router.post('/', devolucionesController.create);
        this.router.put('/:id', devolucionesController.update);
    }

}

export default new DevolucionesRoutes().router;