import { Request, Response } from 'express';


import pool from '../database';

class PuntoController {

    public async list(req: Request, res: Response): Promise<void> {
        const punto = await pool.query('SELECT * FROM PuntoEntrega');
        res.json(punto);
    }
    public async list2(req: Request, res: Response): Promise<void> {
        const punto = await pool.query('SELECT * FROM PuntoEntrega WHERE Estado = 1');
        res.json(punto);
    }

    public async tablap(req: Request, res: Response): Promise<void> {
        const punto = await pool.query('SELECT p.`idPuntoEntrega`, p.`NombrePE`, p.`CodigoInternoPE`, p.`Direccion`, p.`Responsable`, p.`Estado`, p.`Telefono`, p.`CodigoExternoPE`, c.NombreCentroZonal, p.`BarrioPE`, p.`Comuna` FROM puntoentrega p , centroszonales c WHERE p.idCentrosZonales = c.idCentrosZonales');
        res.json(punto);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM PuntoEntrega WHERE idPuntoEntrega = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The PuntoEntrega doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO PuntoEntrega set ?', [req.body]);
        res.json({ message: 'PuntoEntrega Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE PuntoEntrega set ? WHERE idPuntoEntrega = ?', [req.body, id]);
        res.json({ message: "The PuntoEntrega was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM PuntoEntrega WHERE idPuntoEntrega= ?', [id]);
        res.json({ message: "The PuntoEntrega was deleted" });
    }
}

const puntoController = new PuntoController;
export default puntoController;