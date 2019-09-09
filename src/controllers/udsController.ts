import { Request, Response } from 'express';


import pool from '../database';

class UdsController {

    public async list(req: Request, res: Response): Promise<void> {
        const UDS = await pool.query('SELECT * FROM UDS');
        res.json(UDS);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM UDS WHERE idUDS = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The UDS doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO UDS set ?', [req.body]);
        res.json({ message: 'UDS Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE UDS set ? WHERE idUDS= ?', [req.body, id]);
        res.json({ message: "The UDS was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM UDS WHERE idUDS = ?', [id]);
        res.json({ message: "The UDS was deleted" });
    }
}

const udsController = new UdsController;
export default udsController;