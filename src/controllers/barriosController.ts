import { Request, Response } from 'express';


import pool from '../database';

class BarriosController {

    public async list(req: Request, res: Response): Promise<void> {
        const barrio = await pool.query('SELECT * FROM BarriosVeredas');
        res.json(barrio);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM BarriosVeredas WHERE idBarriosVeredas = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The barrio doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO BarriosVeredas set ?', [req.body]);
        res.json({ message: 'Barrio Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE BarriosVeredas set ? WHERE idBarriosVeredas = ?', [req.body, id]);
        res.json({ message: "The barrio was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM BarriosVeredas WHERE idBarriosVeredas = ?', [id]);
        res.json({ message: "The barrio was deleted" });
    }
}

const barriosController = new BarriosController;
export default barriosController;