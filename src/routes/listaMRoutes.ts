import express, { Router } from 'express';

import listaMController from '../controllers/listaMController';

class ListaMRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', listaMController.list);
        this.router.get('/:id', listaMController.getOne);
        this.router.post('/', listaMController.create);
        this.router.put('/:id', listaMController.update);
        this.router.delete('/:id', listaMController.delete);
    }

}

export default new ListaMRoutes().router;