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
class ListaCController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield database_1.default.query('SELECT * FROM ListadoCursos');
            res.json(lista);
        });
    }
    tablac(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield database_1.default.query('SELECT c.idListadoCursos , c.NombreAgenteE , c.NumeroDocumento ,DATE_FORMAT(c.Fecha,"%d-%m-%Y") as Fecha ,c.Estado , t.NombreTipo as tipodocumento,CONCAT(m.PrimerNombre," " ,m.SegundoNombre," " , m.PrimerApellido," " , m.SegundoApellido) As nombrecompleto FROM listadocursos c, beneficiarios m, tipodocumento t where c.idBenefiarios = m.idBeneficiarios AND c.idTipoDocumento = t.idTipoDocumento ');
            res.json(lista);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM ListadoCursos WHERE idListadoCursos = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Listado Cursos doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ListadoCursos set ?', [req.body]);
            res.json({ message: 'Listado Cursos Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE ListadoCursos set ? WHERE idListadoCursos = ?', [req.body, id]);
            res.json({ message: "The Listado Cursos was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ListadoCursos WHERE idListadoCursos = ?', [id]);
            res.json({ message: "The Listado Cursos was deleted" });
        });
    }
}
const listaCController = new ListaCController;
exports.default = listaCController;
