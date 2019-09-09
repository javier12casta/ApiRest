import { Request, Response } from 'express';


import pool from '../database';

class EntregaController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM Entrega');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Entrega WHERE idEntrega = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Entrega doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Entrega set ?', [req.body]);
        res.json({ message: 'Entrega Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Entrega set ? WHERE idEntrega = ?', [req.body, id]);
        res.json({ message: "The Entrega was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Entrega WHERE idEntrega = ?', [id]);
        res.json({ message: "The Entrega was deleted" });
    }
}

const entregaController = new EntregaController;
export default entregaController;