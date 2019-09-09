import express, { Router } from 'express';

import tdocumentoController from '../controllers/tdocumentoController';

class TdocumentoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tdocumentoController.list);
        this.router.get('/:id', tdocumentoController.getOne);
        this.router.post('/', tdocumentoController.create);
        this.router.put('/:id', tdocumentoController.update);
        this.router.delete('/:id', tdocumentoController.delete);
    }

}

export default new TdocumentoRoutes().router;