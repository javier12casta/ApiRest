import { Request, Response } from 'express';


import pool from '../database';

class UnidadController {

    public async list(req: Request, res: Response): Promise<void> {
        const UnidadMedida = await pool.query('SELECT * FROM UnidadMedida');
        res.json(UnidadMedida);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM UnidadMedida WHERE idUnidadMedida = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Unidad Medida doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO UnidadMedida set ?', [req.body]);
        res.json({ message: 'UnidadMedida Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE UnidadMedida set ? WHERE idUnidadMedida = ?', [req.body, id]);
        res.json({ message: "The UnidadMedida was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM UnidadMedida WHERE idUnidadMedida = ?', [id]);
        res.json({ message: "The UnidadMedida was deleted" });
    }
}

const unidadController = new UnidadController;
export default unidadController;