import express, { Router } from 'express';

import bienestarinaController from '../controllers/bienestarinaController';

class BienestarinaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', bienestarinaController.list);
        this.router.get('/maxid', bienestarinaController.Maxid);
        this.router.get('/tabla', bienestarinaController.tabla);
        this.router.get('/datosi', bienestarinaController.datosinventario);
        this.router.get('/:id', bienestarinaController.getOne);
        this.router.post('/', bienestarinaController.create);
        this.router.put('/:id', bienestarinaController.update);
        this.router.delete('/:id', bienestarinaController.delete);
    }

}

export default new BienestarinaRoutes().router;