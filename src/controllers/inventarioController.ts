import { Request, Response } from 'express';


import pool from '../database';

class InventarioController {

    public async list(req: Request, res: Response): Promise<void> {
        const inventario = await pool.query('SELECT * FROM Inventario');
        res.json(inventario);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Inventario WHERE idInventario = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Inventario doesn't exits" });
    }

    public async getInv(req: Request, res: Response): Promise<any> {
        const { nombre } = req.params;
        const games = await pool.query('SELECT * FROM Inventario WHERE 	Nombre = ?', [nombre]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Inventario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Inventario set ?', [req.body]);
        res.json({ message: 'Inventario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Inventario set ? WHERE idInventario= ?', [req.body, id]);
        res.json({ message: "The Inventario was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Inventario WHERE idInventario = ?', [id]);
        res.json({ message: "The Inventario was deleted" });
    }



    public async tabla(req: Request, res: Response): Promise<void> {
        const inv = await pool.query('SELECT  Cantidad, Cantidad2 FROM inventario');
        res.json(inv);
    }

}

const inventarioController = new InventarioController;
export default inventarioController;