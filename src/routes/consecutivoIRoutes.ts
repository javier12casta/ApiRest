import express, { Router } from 'express';

import consecutivoIController from '../controllers/consecutivoIController';

class ConsecutivoIRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', consecutivoIController.list);
        this.router.get('/:id', consecutivoIController.getOne);
        this.router.post('/', consecutivoIController.create);
        this.router.put('/:id', consecutivoIController.update);
        this.router.delete('/:id', consecutivoIController.delete);
    }

}

export default new ConsecutivoIRoutes().router;