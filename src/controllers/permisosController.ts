import { Request, Response } from 'express';


import pool from '../database';

class PermisosController {

    public async list(req: Request, res: Response): Promise<void> {
        const permiso = await pool.query('SELECT * FROM Permisos');
        res.json(permiso);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Permisos WHERE idPermiso = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Permisos doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Permisos set ?', [req.body]);
        res.json({ message: 'Permisos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Permisos set ? WHERE idPermiso = ?', [req.body, id]);
        res.json({ message: "The Permisos was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Permisos WHERE idPermiso = ?', [id]);
        res.json({ message: "The Permisos was deleted" });
    }
}

const permisosController = new PermisosController;
export default permisosController;