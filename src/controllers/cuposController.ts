import { Request, Response } from 'express';


import pool from '../database';

class CuposController {

    public async list(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT * FROM numerocupos');
        res.json(datos);
    }

    public async tablac(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idnumerocupos, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, c.NombreCentroZonal FROM numerocupos d , centroszonales c WHERE d.idCentrosZonales = c.idCentrosZonales ');
        res.json(datos);
    }


    public async tablap(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idnumerocupos, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, p.NombrePE FROM numerocupos d , puntoentrega p WHERE d.idPuntoEntrega = p.idPuntoEntrega ');
        res.json(datos);
    }

    public async tablau(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idnumerocupos, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, u.NombreUDS FROM numerocupos d ,uds u WHERE d.idUDS = u.idUDS ');
        res.json(datos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM numerocupos WHERE idnumerocupos = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The numero cupos doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO numerocupos set ?', [req.body]);
        res.json({ message: 'Numero cupos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE numerocupos set ? WHERE idnumerocupos = ?', [req.body, id]);
        res.json({ message: "The numero cupos was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM numerocupos WHERE idnumerocupos = ?', [id]);
        res.json({ message: "The Numero cupos DatosVarios was deleted" });
    }
}

const cuposController = new CuposController;
export default cuposController;