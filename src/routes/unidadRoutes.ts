import express, { Router } from 'express';

import unidadController from '../controllers/unidadController';

class UnidadRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', unidadController.list);
        this.router.get('/:id', unidadController.getOne);
        this.router.post('/', unidadController.create);
        this.router.put('/:id', unidadController.update);
        this.router.delete('/:id', unidadController.delete);
    }

}

export default new UnidadRoutes().router;