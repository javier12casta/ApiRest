import { Request, Response } from 'express';


import pool from '../database';

class AlmacenesController {

    public async list(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query('SELECT * FROM Almacenes');
        res.json(almacen);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Almacenes WHERE idAlmacenes = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The almacen doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Almacenes set ?', [req.body]);
        res.json({ message: 'Almacenes Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Almacenes set ? WHERE idAlmacenes = ?', [req.body, id]);
        res.json({ message: "The almacen was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Almacenes WHERE idAlmacenes = ?', [id]);
        res.json({ message: "The almacenes was deleted" });
    }
}

const almacenesController = new AlmacenesController;
export default almacenesController;