import { Request, Response } from 'express';


import pool from '../database';

class ReportesController {

    public async list(req: Request, res: Response): Promise<void> {
        const reporte = await pool.query('SELECT * FROM Reportes');
        res.json(reporte);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Reportes WHERE idReportes = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Reportes doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Reportes set ?', [req.body]);
        res.json({ message: 'Reportes Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Reportes set ? WHERE idReportes = ?', [req.body, id]);
        res.json({ message: "The Reportes was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Reportes WHERE idReportes = ?', [id]);
        res.json({ message: "The Reportes was deleted" });
    }
}

const reportesController = new ReportesController;
export default reportesController;