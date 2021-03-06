import express, { Router } from 'express';

import centrosZController from '../controllers/centrosZController';

class CentrosZRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', centrosZController.list);
        this.router.get('/lista', centrosZController.list2);
        this.router.get('/tabla', centrosZController.tabla);
        this.router.get('/duplicadosz', centrosZController.DuplicadosCentroZonales);
        this.router.get('/:id', centrosZController.getOne);
        this.router.post('/', centrosZController.create);
        this.router.put('/:id', centrosZController.update);
        this.router.delete('/:id', centrosZController.delete); 
    }

}

export default new CentrosZRoutes().router;