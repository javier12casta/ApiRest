import express, { Router } from 'express';

import personalController from '../controllers/personalController';

class PersonalRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', personalController.list);
        this.router.get('/:id', personalController.getOne);
        this.router.post('/', personalController.create);
        this.router.put('/:id', personalController.update);
        this.router.delete('/:id', personalController.delete);
    }

}

export default new PersonalRoutes().router;