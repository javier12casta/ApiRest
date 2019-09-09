import { Request, Response } from 'express';


import pool from '../database';

class TdocumentoController {

    public async list(req: Request, res: Response): Promise<void> {
        const TipoDocumento = await pool.query('SELECT * FROM TipoDocumento');
        res.json(TipoDocumento);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM TipoDocumento WHERE idTipoDocumento = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The TipoDocumento doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO TipoDocumento set ?', [req.body]);
        res.json({ message: 'TipoDocumento Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE TipoDocumento set ? WHERE idTipoDocumento = ?', [req.body, id]);
        res.json({ message: "The TipoDocumento was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM TipoDocumento WHERE idTipoDocumento = ?', [id]);
        res.json({ message: "The TipoDocumento was deleted" });
    }
}

const tdocumentoController = new TdocumentoController;
export default tdocumentoController;