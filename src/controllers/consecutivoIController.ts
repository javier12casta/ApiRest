import { Request, Response } from 'express';


import pool from '../database';

class ConsecutivoIController {

    public async list(req: Request, res: Response): Promise<void> {
        const consecutivo = await pool.query('SELECT * FROM ConsecutivoInterno');
        res.json(consecutivo);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ConsecutivoInterno WHERE idConsecutivoInterno = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Consecutivo Interno doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ConsecutivoInterno set ?', [req.body]);
        res.json({ message: 'Consecutivo Interno Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ConsecutivoInterno set ? WHERE idConsecutivoInterno = ?', [req.body, id]);
        res.json({ message: "The Consecutivo Interno was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ConsecutivoInterno WHERE idConsecutivoInterno= ?', [id]);
        res.json({ message: "The Consecutivo Interno was deleted" });
    }
}

const consecutivoIController = new ConsecutivoIController;
export default consecutivoIController;