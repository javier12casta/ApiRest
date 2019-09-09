import express, { Router } from 'express';

import municipioController from '../controllers/municipioController';

class MunicipioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', municipioController.list);
        this.router.get('/:id', municipioController.getOne);
        this.router.post('/', municipioController.create);
        this.router.put('/:id', municipioController.update);
        this.router.delete('/:id', municipioController.delete);
    }

}

export default new MunicipioRoutes().router;