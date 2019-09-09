import { Request, Response } from 'express';


import pool from '../database';

class AcudientesController {

    public async list(req: Request, res: Response): Promise<void> {
        const acudiente = await pool.query('SELECT * FROM Acudientes');
        res.json(acudiente);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Acudientes WHERE idAcudientes = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The acudientes doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Acudientes set ?', [req.body]);
        res.json({ message: 'Acudiente Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Acudientes set ? WHERE idAcudientes = ?', [req.body, id]);
        res.json({ message: "The acudiente was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Acudientes WHERE idAcudientes = ?', [id]);
        res.json({ message: "The acudiente was deleted" });
    }
}

const acudientesController = new AcudientesController;
export default acudientesController;