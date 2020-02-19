import { Request, Response } from 'express';


import pool from '../database';

class BienestarinaController {

    public async list(req: Request, res: Response): Promise<void> {
        const bienestarina = await pool.query('SELECT * FROM Bienestarina');
        res.json(bienestarina);
    }

    public async Maxid(req: Request, res: Response): Promise<void> {
        const bienestarina = await pool.query('SELECT MAX(idBienestarina + 1) AS idBienestarina FROM bienestarina');
        res.json(bienestarina);
    }

    public async tabla(req: Request, res: Response): Promise<void> {
        const bienestarina = await pool.query('SELECT b.idBienestarina,b.lote,DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento,b.Cantidad,b.UnidadPrincipal,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion,r.TipoBienesterina,c.Nombre as centrodistribucion,i.Nombre as inventario,a.Nombre as almacenes FROM bienestarina b, referenciabienestarina r, centrodistribucion c, inventario i, almacenes a WHERE b.idTipoBienesterina = r.idTipoBienesterina AND b.idCentroDistribucion = c.idCentroDistribucion AND b.idInventario = i.idInventario AND b.idAlmacenes = a.idAlmacenes');
        res.json(bienestarina);
    }

    public async datosinventario(req: Request, res: Response): Promise<void> {
        const bienestarina = await pool.query('SELECT DISTINCT b.idBienestarina,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion, ac.numero, b.lote, DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento , b.Cantidad , e.cantidad , Concat(be.PrimerNombre , be.SegundoNombre , be.PrimerApellido) as nombrec , ec.lote as lote1 FROM bienestarina b , entregabeneficiario e , beneficiarios be , acta ac , entregacentrodistribucion ec GROUP BY b.idBienestarina');
        res.json(bienestarina);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Bienestarina WHERE idBienestarina = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Bienestarina doesn't exits" });
    }

    public async getlotes(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT DISTINCT (a.idBienestarina) as id, a.lote FROM bienestarina a WHERE a.idInventario = ? ', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games);
        }
        res.status(404).json({ text: "The lotes doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Bienestarina set ?', [req.body]);
        res.json({ message: 'Bienestarina Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Bienestarina set ? WHERE idBienestarina = ?', [req.body, id]);
        res.json({ message: "The Bienestarina was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Bienestarina WHERE idBienestarina = ?', [id]);
        res.json({ message: "The Bienestarina was deleted" });
    }
}

const bienestarinaController = new BienestarinaController;
export default bienestarinaController;