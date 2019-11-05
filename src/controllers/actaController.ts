import { Request, Response } from 'express';


import pool from '../database';

class ActaController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM acta');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM acta WHERE idacta = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The acta doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO acta set ?', [req.body]);
        res.json({ message: 'acta Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE acta set ? WHERE idacta = ?', [req.body, id]);
        res.json({ message: "The acta was Updated" });
    }
}

const actaController = new ActaController;
export default actaController;