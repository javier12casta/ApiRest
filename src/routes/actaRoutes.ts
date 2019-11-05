import express, { Router } from 'express';

import actaController from '../controllers/actaController';

class ActaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', actaController.list);
        this.router.get('/:id', actaController.getOne);
        this.router.post('/', actaController.create);
        this.router.put('/:id', actaController.update);
    }

}

export default new ActaRoutes().router;