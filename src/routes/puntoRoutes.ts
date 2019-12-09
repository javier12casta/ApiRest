import express, { Router } from 'express';

import puntoController from '../controllers/puntoController';

class PuntoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', puntoController.list);
        this.router.get('/lista', puntoController.list2);
        this.router.get('/tablap', puntoController.tablap);
        this.router.get('/:id', puntoController.getOne);
        this.router.post('/', puntoController.create);
        this.router.put('/:id', puntoController.update);
        this.router.delete('/:id', puntoController.delete);
    }

}

export default new PuntoRoutes().router;