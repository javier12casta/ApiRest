import express, { Router } from 'express';

import listaCController from '../controllers/listaCController';

class ListaCRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', listaCController.list);
        this.router.get('/tablac', listaCController.tablac);
        this.router.get('/tablap', listaCController.tablap);
        this.router.get('/tablau', listaCController.tablau);
        this.router.get('/:id', listaCController.getOne);
        this.router.post('/', listaCController.create);
        this.router.put('/:id', listaCController.update);
        this.router.delete('/:id', listaCController.delete);
    }

}

export default new ListaCRoutes().router;