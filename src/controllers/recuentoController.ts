import { Request, Response } from 'express';


import pool from '../database';

class RecuentoController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM recuentroinventario');
        res.json(entrega);
    }

    public async tabla(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT r.idrecuentroinventario, r.lote, DATE_FORMAT(r.fechavencimiento,"%d-%m-%Y") as fechavencimiento, r.unidadmedida1, r.cantidad, r.cantidadcontada, r.unidadmedida2, re.TipoBienesterina, c.Nombre as centrodistribucion, a.Nombre as almacenes FROM recuentroinventario r, referenciabienestarina re, centrodistribucion c, almacenes a WHERE r.idTipoBienesterina = re.idTipoBienesterina AND r.idCentroDistribucion = c.idCentroDistribucion AND r.idAlmacenes = a.idAlmacenes');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM recuentroinventario WHERE idrecuentroinventario = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The recuentro inventario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO recuentroinventario set ?', [req.body]);
        res.json({ message: 'Recuentro inventario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE recuentroinventario set ? WHERE idrecuentroinventario = ?', [req.body, id]);
        res.json({ message: "The recuentro inventario was Updated" });
    }
}

const recuentoController = new RecuentoController;
export default recuentoController;