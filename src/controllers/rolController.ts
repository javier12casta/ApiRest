import { Request, Response } from 'express';


import pool from '../database';

class RolController {

    public async list(req: Request, res: Response): Promise<void> {
        const rol = await pool.query('SELECT * FROM RolPersona');
        res.json(rol);
    } 

    public async getRol(req: Request, res: Response): Promise<any> {
        const {rol} = req.params
        const games = await pool.query('SELECT * FROM `RolPersona` WHERE RolPersona = ?', [rol] );
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Rol doesn't exits" });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM RolPersona WHERE idRolPersona= ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The RolPersona doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO RolPersona set ?', [req.body]);
        res.json({ message: 'RolPersona Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE RolPersona set ? WHERE idRolPersona = ?', [req.body, id]);
        res.json({ message: "The RolPersona was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM RolPersona WHERE idRolPersona = ?', [id]);
        res.json({ message: "The RolPersona was deleted" });
    }
}

const rolController = new RolController;
export default rolController;