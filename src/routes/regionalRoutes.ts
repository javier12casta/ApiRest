import express, { Router } from 'express';

import regionalController from '../controllers/regionalController';

class RegionalRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', regionalController.list);
        this.router.get('/:id', regionalController.getOne);
        this.router.post('/', regionalController.create);
        this.router.put('/:id', regionalController.update);
        this.router.delete('/:id', regionalController.delete);
    }

}

export default new RegionalRoutes().router;