import express, { Router } from 'express';

import biometricoController from '../controllers/biometricoController';

class BiometricoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', biometricoController.list);
    }

}

export default new BiometricoRoutes().router;