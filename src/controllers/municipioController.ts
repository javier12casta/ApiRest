import { Request, Response } from 'express';


import pool from '../database';

class MunicipioController {

    public async list(req: Request, res: Response): Promise<void> {
        const municipio = await pool.query('SELECT * FROM Municipios');
        res.json(municipio);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Municipios WHERE idMunicipios= ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Municipios doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Municipios set ?', [req.body]);
        res.json({ message: 'Municipios Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Municipios set ? WHERE idMunicipios = ?', [req.body, id]);
        res.json({ message: "The Municipios was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Municipios WHERE idMunicipios= ?', [id]);
        res.json({ message: "The Municipios was deleted" });
    }
}

const municipioController = new MunicipioController;
export default municipioController;