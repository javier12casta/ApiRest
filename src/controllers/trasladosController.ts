import { Request, Response } from 'express';


import pool from '../database';

class TrasladosController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM traslados');
        res.json(entrega);
    }

    public async tabla(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT t.idTraslados, t.lote,DATE_FORMAT(t.fechavencimiento,"%d-%m-%Y") as fechavencimiento, t.unidad,DATE_FORMAT(t.fecharegistro,"%d-%m-%Y") as fecharegistro, r.TipoBienesterina,c.Nombre AS centroorigen, a.Nombre as almancenorigen, a.Nombre as almacendestino FROM traslados t, referenciabienestarina r, centrodistribucion c, almacenes a WHERE t.idTipoBienesterina = r.idTipoBienesterina AND t.idCentroDistribucion = c.idCentroDistribucion AND t.idAlmacenesOrigen = a.idAlmacenes AND t.idAlmacenesDestino = a.idAlmacenes');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM traslados WHERE idTraslados = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The traslados doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO traslados set ?', [req.body]);
        res.json({ message: 'traslados Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE traslados set ? WHERE idTraslados = ?', [req.body, id]);
        res.json({ message: "The traslados was Updated" });
    }
}

const trasladosController = new TrasladosController;
export default trasladosController;