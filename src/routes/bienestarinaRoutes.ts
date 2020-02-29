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
        this.router.get('/datosien', bienestarinaController.datosinventariosalida);
        this.router.get('/datosicen', bienestarinaController.datosinventariosacen);
        this.router.get('/datosicon', bienestarinaController.datosinventariosacon);
        this.router.get('/:id', bienestarinaController.getOne);
        this.router.get('/lotes/:id', bienestarinaController.getlotes);
        this.router.get('/carga/:id', bienestarinaController.getlotescarga);
        this.router.post('/', bienestarinaController.create);
        this.router.put('/:id', bienestarinaController.update);
        this.router.delete('/:id', bienestarinaController.delete);
    }

}

export default new BienestarinaRoutes().router;