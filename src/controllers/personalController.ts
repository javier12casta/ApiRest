import { Request, Response } from 'express';


import pool from '../database';

class PersonalController {

    public async list(req: Request, res: Response): Promise<void> {
        const genero = await pool.query('SELECT * FROM PersonalICBF');
        res.json(genero);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM PersonalICBF WHERE idPersonalICBF= ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The PersonalICBF doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO PersonalICBF set ?', [req.body]);
        res.json({ message: 'PersonalICBF Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE PersonalICBF set ? WHERE idPersonalICBF = ?', [req.body, id]);
        res.json({ message: "The PersonalICBF was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM PersonalICBF WHERE idPersonalICBF = ?', [id]);
        res.json({ message: "The PersonalICBF was deleted" });
    }
}

const personalController = new PersonalController;
export default personalController;