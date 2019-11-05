import express, { Router } from 'express';

import entregacendController from '../controllers/entregacendController';

class EntregacendRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', entregacendController.list);
        this.router.get('/:id', entregacendController.getOne);
        this.router.post('/', entregacendController.create);
        this.router.put('/:id', entregacendController.update);
    }

}

export default new EntregacendRoutes().router;