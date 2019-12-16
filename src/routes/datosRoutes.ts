import express, { Router } from 'express';

import datosController from '../controllers/datosController';

class DatosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', datosController.list);
        this.router.get('/tablac', datosController.tablac);
        this.router.get('/tablap', datosController.tablap);
        this.router.get('/tablau', datosController.tablau);
        this.router.get('/:id', datosController.getOne);
        this.router.post('/', datosController.create);
        this.router.put('/:id', datosController.update);
        this.router.delete('/:id', datosController.delete);
    }

}

export default new DatosRoutes().router;