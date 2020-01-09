import express, { Router } from 'express';

import almacenesController from '../controllers/almacenesController';

class AlmacenesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', almacenesController.list);
        this.router.get('/almacenesc', almacenesController.almacenesc);
        this.router.get('/almacenesp', almacenesController.almacenesp);
        this.router.get('/almacenesu', almacenesController.almacenesu);
        this.router.get('/almacenesr',almacenesController.almacenesr);

      

        this.router.get('/:id', almacenesController.getOne);
        this.router.post('/', almacenesController.create);
        this.router.put('/:id', almacenesController.update);
        this.router.delete('/:id', almacenesController.delete);
    }

}

export default new AlmacenesRoutes().router;