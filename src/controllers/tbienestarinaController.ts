import { Request, Response } from 'express';


import pool from '../database';

class TbienestarinaController {

    public async list(req: Request, res: Response): Promise<void> {
        const TipoBienesterina = await pool.query('SELECT * FROM TipoBienesterina');
        res.json(TipoBienesterina);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM TipoBienesterina WHERE idTipoBienesterina = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The TipoBienesterina doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO TipoBienesterina set ?', [req.body]);
        res.json({ message: 'TipoBienesterina Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE TipoBienesterina set ? WHERE idTipoBienesterina = ?', [req.body, id]);
        res.json({ message: "The TipoBienesterina was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM TipoBienesterina WHERE idTipoBienesterina = ?', [id]);
        res.json({ message: "The TipoBienesterina was deleted" });
    }
}

const tbienestarinaController = new TbienestarinaController;
export default tbienestarinaController;