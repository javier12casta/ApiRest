import express, { Router } from 'express';

import biometricoController from '../controllers/biometricoController';

class BiometricoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', biometricoController.list);
        this.router.get('/val', biometricoController.valid);
        this.router.post('/', biometricoController.create);
        this.router.get('/guardar', biometricoController.guardar);
        this.router.post('/huella', biometricoController.create2);
    }

}

export default new BiometricoRoutes().router;