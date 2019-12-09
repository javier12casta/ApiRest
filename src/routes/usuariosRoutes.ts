import express, { Router } from 'express';

import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', usuariosController.list);
        this.router.get('/tablausuariosc', usuariosController.tablausuariosc);
        this.router.get('/tablausuariosp', usuariosController.tablausuariosp);
        this.router.get('/tablausuariosu', usuariosController.tablausuariosu);
        this.router.get('/tablausuariosr', usuariosController.tablausuariosr);
        this.router.get('/:id', usuariosController.getOne);
        this.router.get('/user/:user', usuariosController.getuser);
        this.router.post('/', usuariosController.create);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
    }

}

export default new UsuariosRoutes().router;