import express, { Router } from 'express';

import inventarioController from '../controllers/inventarioController';

class InventarioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', inventarioController.list);
        this.router.get('/tabla', inventarioController.tabla);
        this.router.get('/:id', inventarioController.getOne);
        this.router.get('/:nombre', inventarioController.getInv);
        this.router.post('/', inventarioController.create);
        this.router.put('/:id', inventarioController.update);
        this.router.delete('/:id', inventarioController.delete);
     
    }

}

export default new InventarioRoutes().router;