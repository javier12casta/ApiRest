import express, { Router } from 'express';

import centrosDController from '../controllers/centrosDController';

class centrosDRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', centrosDController.list);
        this.router.get('/centrodistribucionc', centrosDController.centrodistribucionc);
        this.router.get('/centrodistribucionp', centrosDController.centrodistribucionp);
        this.router.get('/centrodistribucionu', centrosDController.centrodistribucionu);
        

        this.router.get('/centrodistribucionxcentro',centrosDController.centrodxcentro);

        this.router.get('/centrodistribucionxpunto',centrosDController.centrodxpunto);

        this.router.get('/centrodistribucionxuds',centrosDController.centrodxuds);

        this.router.get('/:id', centrosDController.getOne);
        this.router.post('/', centrosDController.create);
        this.router.put('/:id', centrosDController.update);
        this.router.delete('/:id', centrosDController.delete);
    }

}

export default new centrosDRoutes().router;