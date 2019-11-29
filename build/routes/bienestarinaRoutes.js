"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bienestarinaController_1 = __importDefault(require("../controllers/bienestarinaController"));
class BienestarinaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bienestarinaController_1.default.list);
        this.router.get('/tabla', bienestarinaController_1.default.tabla);
        this.router.get('/:id', bienestarinaController_1.default.getOne);
        this.router.post('/', bienestarinaController_1.default.create);
        this.router.put('/:id', bienestarinaController_1.default.update);
        this.router.delete('/:id', bienestarinaController_1.default.delete);
    }
}
exports.default = new BienestarinaRoutes().router;
