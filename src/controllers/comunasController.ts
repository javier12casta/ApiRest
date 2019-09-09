import { Request, Response } from 'express';


import pool from '../database';

class ComunasController {

    public async list(req: Request, res: Response): Promise<void> {
        const comuna = await pool.query('SELECT * FROM Comunas');
        res.json(comuna);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Comunas WHERE idComunas = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Comuna doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Comunas set ?', [req.body]);
        res.json({ message: 'Comuna Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Comunas set ? WHERE idComunas = ?', [req.body, id]);
        res.json({ message: "The Comuna was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Comunas WHERE idComunas = ?', [id]);
        res.json({ message: "The Comuna was deleted" });
    }
}

const comunasController = new ComunasController;
export default comunasController;