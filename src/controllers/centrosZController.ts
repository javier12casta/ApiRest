import { Request, Response } from 'express';


import pool from '../database';

class CentrosZController {

    public async list(req: Request, res: Response): Promise<void> {
        const centro = await pool.query('SELECT * FROM CentrosZonales');
        res.json(centro);
    }
    public async tabla(req: Request, res: Response): Promise<void> {
        const centro = await pool.query('SELECT c.idCentrosZonales, c.NombreCentroZonal,m.Municipio,c.CodigoExternoJcz, c.CodigoExternoCZ, c.Estado, r.Regional, c.Comuna FROM centroszonales c, municipios m, regional r where c.idMunicipios = m.idMunicipios AND c.idRegional = r.idRegional');
        res.json(centro);
    }

    public async DuplicadosCentroZonales(req: Request, res: Response): Promise<void> {
        const centro = await pool.query('SELECT NombreCentroZonal , CodigoExternoCZ , CodigoExternoJcz , count(*) AS cantidadD FROM centroszonales GROUP BY NombreCentroZonal HAVING COUNT(*)> 1');
        res.json(centro);
    }


    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM CentrosZonales WHERE idCentrosZonales = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Centro Zonal doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO CentrosZonales set ?', [req.body]);
        res.json({ message: 'Centro Zonal Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE CentrosZonales set ? WHERE idCentrosZonales = ?', [req.body, id]);
        res.json({ message: "The Centro Zonal was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM CentrosZonales WHERE idCentrosZonales = ?', [id]);
        res.json({ message: "The Centro Zonal was deleted" });
    }
}

const centrosZController = new CentrosZController;
export default centrosZController;