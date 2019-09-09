import express, { Router } from 'express';

import consecutivoMController from '../controllers/consecutivoMController';

class ConsecutivoMRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', consecutivoMController.list);
        this.router.get('/:id', consecutivoMController.getOne);
        this.router.post('/', consecutivoMController.create);
        this.router.put('/:id', consecutivoMController.update);
        this.router.delete('/:id', consecutivoMController.delete);
    }

}

export default new ConsecutivoMRoutes().router;