import express, { Router } from 'express';

import udsController from '../controllers/udsController';

class UdsRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', udsController.list);
        this.router.get('/tablau', udsController.tablau);
        this.router.get('/:id', udsController.getOne);
        this.router.post('/', udsController.create);
        this.router.put('/:id', udsController.update);
        this.router.delete('/:id', udsController.delete);
    }

}

export default new UdsRoutes().router;