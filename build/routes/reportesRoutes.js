"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesController_1 = __importDefault(require("../controllers/reportesController"));
class ReportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reportesController_1.default.list);
        this.router.get('/:id', reportesController_1.default.getOne);
        this.router.post('/', reportesController_1.default.create);
        this.router.put('/:id', reportesController_1.default.update);
        this.router.delete('/:id', reportesController_1.default.delete);
    }
}
exports.default = new ReportesRoutes().router;
