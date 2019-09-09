import { Request, Response } from 'express';


import pool from '../database';

class GeneroController {

    public async list(req: Request, res: Response): Promise<void> {
        const genero = await pool.query('SELECT * FROM Genero');
        res.json(genero);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Genero WHERE idGenero = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The genero doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Genero set ?', [req.body]);
        res.json({ message: 'Genero Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Genero set ? WHERE idGenero = ?', [req.body, id]);
        res.json({ message: "The genero was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Genero WHERE idGenero = ?', [id]);
        res.json({ message: "The Genero was deleted" });
    }
}

const generoController = new GeneroController;
export default generoController;