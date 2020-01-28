"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const biometricoController_1 = __importDefault(require("../controllers/biometricoController"));
class BiometricoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', biometricoController_1.default.list);
        this.router.post('/', biometricoController_1.default.create);
    }
}
exports.default = new BiometricoRoutes().router;
