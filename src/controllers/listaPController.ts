import { Request, Response } from 'express';


import pool from '../database';

class ListaPController {

    public async list(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT * FROM ListaPrecios');
        res.json(lista);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ListaPrecios WHERE idListaPrecios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Lista Precios doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ListaPrecios set ?', [req.body]);
        res.json({ message: 'Lista PreciosSaved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ListaPrecios set ? WHERE idListaPrecios = ?', [req.body, id]);
        res.json({ message: "The Lista Precios was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ListaPrecios WHERE idListaPrecios = ?', [id]);
        res.json({ message: "The Lista Precios was deleted" });
    }
}

const listaPController = new ListaPController;
export default listaPController;