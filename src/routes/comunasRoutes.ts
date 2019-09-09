import express, { Router } from 'express';

import comunasController from '../controllers/comunasController';

class ComunasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', comunasController.list);
        this.router.get('/:id', comunasController.getOne);
        this.router.post('/', comunasController.create);
        this.router.put('/:id', comunasController.update);
        this.router.delete('/:id', comunasController.delete);
    }

}

export default new ComunasRoutes().router;