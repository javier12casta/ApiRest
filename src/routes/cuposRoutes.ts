import express, { Router } from 'express';

import cuposController from '../controllers/cuposController';

class CuposRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', cuposController.list);
        this.router.get('/tablac', cuposController.tablac);
        this.router.get('/tablap', cuposController.tablap);
        this.router.get('/tablau', cuposController.tablau);
        this.router.get('/:id', cuposController.getOne);
        this.router.post('/', cuposController.create);
        this.router.put('/:id', cuposController.update);
        this.router.delete('/:id', cuposController.delete);
    }

}

export default new CuposRoutes().router;