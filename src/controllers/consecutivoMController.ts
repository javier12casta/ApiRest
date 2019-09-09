import { Request, Response } from 'express';


import pool from '../database';

class ConsecutivoMController {

    public async list(req: Request, res: Response): Promise<void> {
        const consecutivo = await pool.query('SELECT * FROM ConsecutivosMaestro');
        res.json(consecutivo);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ConsecutivosMaestro WHERE idConsecutivosMaestro = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Consecutivo Maestro doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ConsecutivosMaestro set ?', [req.body]);
        res.json({ message: 'Consecutivo Maestro Interno Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ConsecutivosMaestro set ? WHERE idConsecutivosMaestro = ?', [req.body, id]);
        res.json({ message: "The Consecutivo Maestro was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ConsecutivosMaestro WHERE idConsecutivosMaestro= ?', [id]);
        res.json({ message: "The Consecutivo Maestro was deleted" });
    }
}

const consecutivoMController = new ConsecutivoMController;
export default consecutivoMController;