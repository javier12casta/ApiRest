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
class AlmacenesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT * FROM Almacenes');
            res.json(almacen);
        });
    }
    almacenesc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, ce.Nombre As Nombrecentrodistribucion , a.Capacidad2,c.NombreCentroZonal FROM almacenes a , centroszonales c , centrodistribucion ce WHERE a.idCentrosZonales = c.idCentrosZonales and a.idCentroDistribucion = ce.idCentroDistribucion;');
            res.json(almacen);
        });
    }
    almacenesp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, c.Nombre As Nombrecentrodistribucion, a.Capacidad2,p.NombrePE FROM almacenes a , puntoentrega p , centrodistribucion c WHERE a.idPuntoEntrega = p.idPuntoEntrega and a.idCentroDistribucion = c.idCentroDistribucion ');
            res.json(almacen);
        });
    }
    almacenesu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, c.Nombre As Nombrecentrodistribucion, a.Capacidad2,u.NombreUDS FROM almacenes a , uds u , centrodistribucion c WHERE a.idUDS = u.idUDS and a.idCentroDistribucion = c.idCentroDistribucion ');
            res.json(almacen);
        });
    }
    almacenesr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query(' SELECT c.idAlmacenes, c.NumeroExterno, c.Nombre, c.Responsable, c.Capacidad, c.Estado, d.Nombre AS centro, c.Capacidad2 FROM almacenes c , centrodistribucion d WHERE c.idCentroDistribucion = d.idCentroDistribucion');
            res.json(almacen);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM Almacenes WHERE idAlmacenes = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The almacen doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Almacenes set ?', [req.body]);
            res.json({ message: 'Almacenes Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Almacenes set ? WHERE idAlmacenes = ?', [req.body, id]);
            res.json({ message: "The almacen was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Almacenes WHERE idAlmacenes = ?', [id]);
            res.json({ message: "The almacenes was deleted" });
        });
    }
}
const almacenesController = new AlmacenesController;
exports.default = almacenesController;
