import express, { Router } from 'express';

import entregabeController from '../controllers/entregabeController';

class EntregabeRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', entregabeController.list);
        this.router.get('/tabla', entregabeController.tabla);
        this.router.get('/tabla1', entregabeController.tabla1);
        this.router.get('/:id', entregabeController.getOne);
        this.router.post('/', entregabeController.create);
        this.router.put('/:id', entregabeController.update);
    }

}

export default new EntregabeRoutes().router;