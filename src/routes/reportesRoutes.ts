import express, { Router } from 'express';

import reportesController from '../controllers/reportesController';

class ReportesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', reportesController.list);
        this.router.get('/:id', reportesController.getOne);
        this.router.post('/', reportesController.create);
        this.router.put('/:id', reportesController.update);
        this.router.delete('/:id', reportesController.delete);
    }

}

export default new ReportesRoutes().router;