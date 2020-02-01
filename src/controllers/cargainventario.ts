import { Request, Response } from 'express';


import pool from '../database';

class CargainventarioController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM cargainventario ');
        res.json(entrega);
    }

    public async tabla(req: Request, res: Response): Promise<void> {
        const bienestarina = await pool.query('SELECT b.idcargainventario,b.lote,DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento,b.Cantidad,b.UnidadPrincipal,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion,r.TipoBienesterina,c.Nombre as centrodistribucion,i.Nombre as inventario,a.Nombre as almacenes FROM cargainventario b, referenciabienestarina r, centrodistribucion c, inventario i, almacenes a WHERE b.idTipoBienesterina = r.idTipoBienesterina AND b.idCentroDistribucion = c.idCentroDistribucion AND b.idInventario = i.idInventario AND b.idAlmacenes = a.idAlmacenes ');
        res.json(bienestarina);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM cargainventario WHERE idcargainventario = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The cargainvemtario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO cargainventario set ?', [req.body]);
        res.json({ message: 'cargainventario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE cargainventario set ? WHERE idcargainventario = ?', [req.body, id]);
        res.json({ message: "The cargainventario was Updated" });
    }
}

const cargainventarioController = new CargainventarioController;
export default cargainventarioController;