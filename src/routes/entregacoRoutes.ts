import express, { Router } from 'express';

import entregacoController from '../controllers/entregacoController';

class EntregacoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', entregacoController.list);
        this.router.get('/:id', entregacoController.getOne);
        this.router.post('/', entregacoController.create);
        this.router.put('/:id', entregacoController.update);
    }

}

export default new EntregacoRoutes().router;