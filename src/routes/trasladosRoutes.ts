import express, { Router } from 'express';

import trasladosController from '../controllers/trasladosController';

class TrasladosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', trasladosController.list);
        this.router.get('/tabla', trasladosController.tabla);
        this.router.get('/:id', trasladosController.getOne);
        this.router.post('/', trasladosController.create);
        this.router.put('/:id', trasladosController.update);
    }

}

export default new TrasladosRoutes().router;