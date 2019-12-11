import { Request, Response } from 'express';


import pool from '../database';

class DevolucionesController {

    public async list(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT * FROM devoluciones');
        res.json(datos);
    }

    public async devoluciontabla(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.iddevoluciones, d.lote, d.fechavencimiento, d.unidad, d.fecharegistro, r.Referencia, c.Nombre AS centrodistribucionorigen, c.Nombre AS centrodistribuciondestino, a.Nombre AS Nombrealmacen FROM devoluciones d , referenciabienestarina r , centrodistribucion c , almacenes a WHERE d.idTipoBienesterina = r.idTipoBienesterina and d.idCentroDistribucionOrigen = c.idCentroDistribucion and d.idCentroDistribucionDestino = c.idCentroDistribucion and d.idAlmacenes = a.idAlmacenes ');
        res.json(datos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM devoluciones WHERE iddevoluciones = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The devoluciones doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO devoluciones set ?', [req.body]);
        res.json({ message: 'Devoluciones Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE devoluciones set ? WHERE iddevoluciones = ?', [req.body, id]);
        res.json({ message: "The devoluciones was Updated" });
    }

}

const devolucionesController = new DevolucionesController;
export default devolucionesController;