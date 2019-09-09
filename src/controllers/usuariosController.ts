import { Request, Response } from 'express';


import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT * FROM Usuarios');
        res.json(Usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Usuarios WHERE idUsuarios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Usuario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Usuarios set ?', [req.body]);
        res.json({ message: 'Usuario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Usuarios set ? WHERE idUsuarios = ?', [req.body, id]);
        res.json({ message: "The Usuario was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Usuarios WHERE idUsuarios = ?', [id]);
        res.json({ message: "The Usuarios was deleted" });
    }
}

const usuariosController = new UsuariosController;
export default usuariosController;