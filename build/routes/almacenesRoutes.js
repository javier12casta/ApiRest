"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const almacenesController_1 = __importDefault(require("../controllers/almacenesController"));
class AlmacenesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', almacenesController_1.default.list);
        this.router.get('/:id', almacenesController_1.default.getOne);
        this.router.post('/', almacenesController_1.default.create);
        this.router.put('/:id', almacenesController_1.default.update);
        this.router.delete('/:id', almacenesController_1.default.delete);
    }
}
exports.default = new AlmacenesRoutes().router;
