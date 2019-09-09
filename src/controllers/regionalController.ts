import { Request, Response } from 'express';


import pool from '../database';

class RegionalController {

    public async list(req: Request, res: Response): Promise<void> {
        const regional = await pool.query('SELECT * FROM Regional');
        res.json(regional);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Regional WHERE idRegional= ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Regional doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Regional set ?', [req.body]);
        res.json({ message: 'Regional Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Regional set ? WHERE idRegional = ?', [req.body, id]);
        res.json({ message: "The Regional was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Regional WHERE idRegional = ?', [id]);
        res.json({ message: "The Regional was deleted" });
    }
}

const regionalController = new RegionalController;
export default regionalController;