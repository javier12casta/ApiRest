import express, { Router } from 'express';

import entregaController from '../controllers/entregaController';

class EntregaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', entregaController.list);
        this.router.get('/:id', entregaController.getOne);
        this.router.post('/', entregaController.create);
        this.router.put('/:id', entregaController.update);
        this.router.delete('/:id', entregaController.delete);
    }

}

export default new EntregaRoutes().router;