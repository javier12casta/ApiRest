"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BiometricoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const biometrico = yield database_1.default.query("SELECT Huella FROM uibiometrico");
            res.json(biometrico);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const result = await pool.query('INSERT INTO CentroDistribucion set ?', [req.body]);
            /*     if (typeof localStorage === "undefined" || localStorage === null) {
              var LocalStorage = require("node-localstorage").LocalStorage;
              localStorage = new LocalStorage("http://localhost:3000");
            }
            localStorage.setItem("myFirstKey", "myFirstValue");
            console.log(localStorage.getItem("myFirstKey")); */
            sessionStorage.setItem('dogName', 'Fluffy');
            sessionStorage.getItem('dogName');
            function saveData() {
                if (typeof Storage !== "undefined") {
                    localStorage.setItem("name", "Shahid");
                    localStorage.setItem("city", "Mumbai");
                    localStorage.setItem("country", "India");
                }
            }
            saveData();
            res.json(req.body);
        });
    }
}
const biometricoController = new BiometricoController();
exports.default = biometricoController;
