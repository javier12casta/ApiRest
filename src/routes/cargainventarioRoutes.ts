import express, { Router } from 'express';

import CargainventarioController from '../controllers/cargainventario';

class CargainventarioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', CargainventarioController.list);
        this.router.get('/tabla', CargainventarioController.tabla);
        this.router.get('/:id', CargainventarioController.getOne);
        this.router.post('/', CargainventarioController.create);
        this.router.put('/:id', CargainventarioController.update);
    }

}

export default new CargainventarioRoutes().router;