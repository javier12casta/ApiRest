import express, { Router } from 'express';

import rolController from '../controllers/rolController';

class RolRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', rolController.list);
        this.router.get('/rolnom/:rol', rolController.getRol);
        this.router.get('/:id', rolController.getOne);
        this.router.post('/', rolController.create);
        this.router.put('/:id', rolController.update);
        this.router.delete('/:id', rolController.delete);
    }

}

export default new RolRoutes().router;