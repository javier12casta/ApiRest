"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consecutivoMController_1 = __importDefault(require("../controllers/consecutivoMController"));
class ConsecutivoMRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', consecutivoMController_1.default.list);
        this.router.get('/:id', consecutivoMController_1.default.getOne);
        this.router.post('/', consecutivoMController_1.default.create);
        this.router.put('/:id', consecutivoMController_1.default.update);
        this.router.delete('/:id', consecutivoMController_1.default.delete);
    }
}
exports.default = new ConsecutivoMRoutes().router;
