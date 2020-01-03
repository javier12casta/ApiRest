import { Request, Response } from 'express';


import pool from '../database';

class EntregacendController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM entregacentrodistribucion');
        res.json(entrega);
    }
    public async tabla(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT e.identregacentrodistribucion,e.lote,DATE_FORMAT(e.fechavencimiento,"%d-%m-%Y") as fechavencimiento , e.cantidad,e.unidad,DATE_FORMAT(e.fecharegistro,"%d-%m-%Y") as fecharegistro,c.Nombre as centroorigen, c.Nombre as centrodestino,b.Nombre AS idAlmacenesDestino, a.Nombre, r.TipoBienesterina FROM entregacentrodistribucion e, centrodistribucion c, almacenes a,  referenciabienestarina r, almacenes b WHERE e.idCentroDistribucionOrigen = c.idCentroDistribucion AND e.idCentroDistribucionDestino=c.idCentroDistribucion AND e.idAlmacen = a.idAlmacenes AND e.idTipoBienesterina = r.idTipoBienesterina AND e.idAlmacenesDestino = b.idAlmacenes');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM entregacentrodistribucion WHERE identregacentrodistribucion = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The entrega centro distribucion doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO entregacentrodistribucion set ?', [req.body]);
        res.json({ message: 'Entrega centro distribucion Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE entregacentrodistribucion set ? WHERE identregacentrodistribucion = ?', [req.body, id]);
        res.json({ message: "The entrega centro distribucion was Updated" });
    }
}

const entregacendController = new EntregacendController;
export default entregacendController;