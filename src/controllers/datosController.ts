import { Request, Response } from 'express';


import pool from '../database';

class DatosController {

    public async list(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT * FROM DatosVarios');
        res.json(datos);
    }

    public async tablac(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, c.NombreCentroZonal FROM datosvarios d , centroszonales c WHERE d.idCentrosZonales = c.idCentrosZonales ');
        res.json(datos);
    }


    public async tablap(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, p.NombrePE FROM datosvarios d , puntoentrega p WHERE d.idPuntoEntrega = p.idPuntoEntrega');
        res.json(datos);
    }

    public async tablau(req: Request, res: Response): Promise<void> {
        const datos = await pool.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, u.NombreUDS FROM datosvarios d ,uds u WHERE d.idUDS = u.idUDS');
        res.json(datos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM DatosVarios WHERE idDatosVarios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Datos Varios doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO DatosVarios set ?', [req.body]);
        res.json({ message: 'Datos Varios Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE DatosVarios set ? WHERE idDatosVarios = ?', [req.body, id]);
        res.json({ message: "The Datos Varios was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM DatosVarios WHERE idDatosVarios = ?', [id]);
        res.json({ message: "The DatosVarios was deleted" });
    }
}

const datosController = new DatosController;
export default datosController;