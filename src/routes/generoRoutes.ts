import express, { Router } from 'express';

import generoController from '../controllers/generoController';

class GeneroRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', generoController.list);
        this.router.get('/:id', generoController.getOne);
        this.router.post('/', generoController.create);
        this.router.put('/:id', generoController.update);
        this.router.delete('/:id', generoController.delete);
    }

}

export default new GeneroRoutes().router;