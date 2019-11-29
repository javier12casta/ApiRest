import express, { Router } from 'express';

import recuentocoController from '../controllers/recuentoController';

class RecuentoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', recuentocoController.list);
        this.router.get('/tabla', recuentocoController.tabla);
        this.router.get('/:id', recuentocoController.getOne);
        this.router.post('/', recuentocoController.create);
        this.router.put('/:id', recuentocoController.update);
    }

}

export default new RecuentoRoutes().router;