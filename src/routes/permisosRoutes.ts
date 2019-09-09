import express, { Router } from 'express';

import permisosController from '../controllers/permisosController';

class PermisosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', permisosController.list);
        this.router.get('/:id', permisosController.getOne);
        this.router.post('/', permisosController.create);
        this.router.put('/:id', permisosController.update);
        this.router.delete('/:id', permisosController.delete);
    }

}

export default new PermisosRoutes().router;