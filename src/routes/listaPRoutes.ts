import express, { Router } from 'express';

import listaPController from '../controllers/listaPController';

class ListaPRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', listaPController.list);
        this.router.get('/tabla', listaPController.tabla);
        this.router.get('/tabla1', listaPController.tabla1);
        this.router.get('/:id', listaPController.getOne);
        this.router.post('/', listaPController.create);
        this.router.put('/:id', listaPController.update);
        this.router.delete('/:id', listaPController.delete);
    }

}

export default new ListaPRoutes().router;