import express, { Router } from 'express';

import beneficiariosController from '../controllers/beneficiariosController';

class BeneficiariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', beneficiariosController.list);
        this.router.get('/id', beneficiariosController.id);
        this.router.get('/beneficiariosc', beneficiariosController.beneficiariosablac);
        this.router.get('/beneficiariosp', beneficiariosController.beneficiariosablap);
        this.router.get('/beneficiariosu', beneficiariosController.beneficiariosabla);
        this.router.get('/beneficiariosr', beneficiariosController.beneficiariosreporte);
        this.router.get('/:id', beneficiariosController.getOne);
        this.router.post('/', beneficiariosController.create);
        this.router.put('/:id', beneficiariosController.update);
        this.router.delete('/:id', beneficiariosController.delete);
    }

}

export default new BeneficiariosRoutes().router;