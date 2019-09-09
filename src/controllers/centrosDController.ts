import { Request, Response } from 'express';


import pool from '../database';
 
class CentrosDController {

    public async list(req: Request, res: Response): Promise<void> {
        const centro = await pool.query('SELECT * FROM CentroDistribucion');
        res.json(centro);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const centro = await pool.query('SELECT * FROM CentroDistribucion WHERE idCentroDistribucion = ?', [id]);
        console.log(centro.length);
        if (centro.length > 0) {
            return res.json(centro[0]);
        }
        res.status(404).json({ text: "The Centro Distribucion doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO CentroDistribucion set ?', [req.body]);
        res.json({ message: 'Centro Distribucion Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE CentroDistribucion set ? WHERE idCentroDistribucion = ?', [req.body, id]);
        res.json({ message: "The Centro Distribucion was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CentroDistribucion WHERE idCentroDistribucion = ?', [id]);
        res.json({ message: "The Centro Distribucion was deleted" });
    }
}

const centrosDController = new CentrosDController;
export default centrosDController;