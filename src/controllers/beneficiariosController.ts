import { Request, Response } from 'express';


import pool from '../database';

class BeneficiariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query('SELECT * FROM Beneficiarios');
        res.json(beneficiario);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The beneficiario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Beneficiarios set ?', [req.body]);
        res.json({ message: 'Beneficiario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Beneficiarios set ? WHERE idBeneficiarios = ?', [req.body, id]);
        res.json({ message: "The beneficiario was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
        res.json({ message: "The beneficiario was deleted" });
    }
}

const beneficiariosController = new BeneficiariosController;
export default beneficiariosController;