import { Request, Response } from 'express';


import pool from '../database';

class EntregacoController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM entregaconsumointerno');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM entregaconsumointerno WHERE idEntregaconsumointerno = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The entrega consumo interno doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO entregaconsumointerno set ?', [req.body]);
        res.json({ message: 'Entrega entrega consumo interno Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE entregaconsumointerno set ? WHERE idEntregaconsumointerno = ?', [req.body, id]);
        res.json({ message: "The entrega consumo interno was Updated" });
    }
}

const entregacoController = new EntregacoController;
export default entregacoController;