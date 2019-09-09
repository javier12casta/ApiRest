"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.default.list);
        this.router.get('/:id', usuariosController_1.default.getOne);
        this.router.post('/', usuariosController_1.default.create);
        this.router.put('/:id', usuariosController_1.default.update);
        this.router.delete('/:id', usuariosController_1.default.delete);
    }
}
exports.default = new UsuariosRoutes().router;
