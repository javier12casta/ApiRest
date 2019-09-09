import { Request, Response } from 'express';


import pool from '../database';

class ListaMController {

    public async list(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT * FROM ListasMaestro');
        res.json(lista);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ListasMaestro WHERE idListasMaestro = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Listas Maestro doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ListasMaestro set ?', [req.body]);
        res.json({ message: 'Listas Maestro Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ListasMaestro set ? WHERE idListasMaestro = ?', [req.body, id]);
        res.json({ message: "The ListasMaestro was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ListasMaestro WHERE idListasMaestro = ?', [id]);
        res.json({ message: "The Listas Maestrowas deleted" });
    }
}

const listaMController = new ListaMController;
export default listaMController;