import express, { Router } from 'express';

import tbienestarinaController from '../controllers/tbienestarinaController';

class TbienestarinaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tbienestarinaController.list);
        this.router.get('/:id', tbienestarinaController.getOne);
        this.router.post('/', tbienestarinaController.create);
        this.router.put('/:id', tbienestarinaController.update);
        this.router.delete('/:id', tbienestarinaController.delete);
    }

}

export default new TbienestarinaRoutes().router;