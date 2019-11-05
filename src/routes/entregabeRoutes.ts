import express, { Router } from 'express';

import entregabeController from '../controllers/entregabeController';

class EntregabeRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', entregabeController.list);
        this.router.get('/:id', entregabeController.getOne);
        this.router.post('/', entregabeController.create);
        this.router.put('/:id', entregabeController.update);
    }

}

export default new EntregabeRoutes().router;