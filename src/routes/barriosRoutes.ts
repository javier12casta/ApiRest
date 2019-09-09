import express, { Router } from 'express';

import barriosController from '../controllers/barriosController';

class BarriosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', barriosController.list);
        this.router.get('/:id', barriosController.getOne);
        this.router.post('/', barriosController.create);
        this.router.put('/:id', barriosController.update);
        this.router.delete('/:id', barriosController.delete);
    }

}

export default new BarriosRoutes().router;