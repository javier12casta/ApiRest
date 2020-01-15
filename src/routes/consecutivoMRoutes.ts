import express, { Router } from 'express';

import consecutivoMController from '../controllers/consecutivoMController';

class ConsecutivoMRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        
        this.router.get('/', consecutivoMController.list);
        this.router.get('/tabla1', consecutivoMController.actualizartabla1);
        this.router.get('/tabla2', consecutivoMController.actualizartabla2);
        this.router.get('/tabla3', consecutivoMController.actualizartabla3);
        this.router.get('/tabla4', consecutivoMController.actualizartabla4);
        this.router.get('/tabla5', consecutivoMController.actualizartabla5);
        this.router.get('/tabla6', consecutivoMController.actualizartabla6);
        this.router.get('/tabla7', consecutivoMController.actualizartabla7);
        this.router.get('/tabla8', consecutivoMController.actualizartabla8);
        this.router.get('/tabla9', consecutivoMController.actualizartabla9);
        this.router.get('/tabla10', consecutivoMController.actualizartabla10);
        this.router.get('/tabla11', consecutivoMController.actualizartabla11);
        this.router.get('/tabla12', consecutivoMController.actualizartabla12);
        this.router.get('/tabla13', consecutivoMController.actualizartabla13);
        this.router.get('/tabla14', consecutivoMController.actualizartabla14);
        this.router.get('/tabla15', consecutivoMController.actualizartabla15);
        this.router.get('/tabla16', consecutivoMController.actualizartabla16);
        this.router.get('/tabla17', consecutivoMController.actualizartabla17);
        this.router.get('/tabla18', consecutivoMController.actualizartabla18);
        this.router.get('/tabla19', consecutivoMController.actualizartabla19);
        this.router.get('/:id', consecutivoMController.getOne);
        this.router.post('/', consecutivoMController.create);
        this.router.put('/:id', consecutivoMController.update);
        this.router.delete('/:id', consecutivoMController.delete);
    }

}

export default new ConsecutivoMRoutes().router;