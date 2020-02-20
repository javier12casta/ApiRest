import { Request, Response } from 'express';


import pool from '../database';

class AlmacenesController {

    public async list(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query('SELECT * FROM Almacenes');
        res.json(almacen);
    }

    public async almacenesc(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, ce.Nombre As Nombrecentrodistribucion , a.Capacidad2,c.NombreCentroZonal, i.Cantidad AS Cantidadex, i.Cantidad2 AS Cantidadex2 FROM almacenes a , centroszonales c , centrodistribucion ce, inventario i WHERE a.idCentrosZonales = c.idCentrosZonales and a.idCentroDistribucion = ce.idCentroDistribucion AND a.idAlmacenes = i.idInventario;');
        res.json(almacen);
    }


    public async almacenesp(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, c.Nombre As Nombrecentrodistribucion, a.Capacidad2,p.NombrePE, i.Cantidad AS Cantidadex, i.Cantidad2 AS Cantidadex2 FROM almacenes a , puntoentrega p , centrodistribucion c, inventario i WHERE a.idPuntoEntrega = p.idPuntoEntrega and a.idCentroDistribucion = c.idCentroDistribucion AND a.idAlmacenes = i.idInventario ');
        res.json(almacen);
    }

    public async almacenesu(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query('SELECT a.idAlmacenes, a.NumeroExterno, a.Nombre, a.Responsable, a.Capacidad, a.Estado, c.Nombre As Nombrecentrodistribucion, a.Capacidad2,u.NombreUDS, i.Cantidad AS Cantidadex, i.Cantidad2 AS Cantidadex2 FROM almacenes a , uds u , centrodistribucion c, inventario i WHERE a.idUDS = u.idUDS and a.idCentroDistribucion = c.idCentroDistribucion AND a.idAlmacenes = i.idInventario ');
        res.json(almacen);
    }

    public async almacenesr(req: Request, res: Response): Promise<void> {
        const almacen = await pool.query(' SELECT c.idAlmacenes, c.NumeroExterno, c.Nombre, c.Responsable, c.Capacidad, c.Estado, d.Nombre AS centro, c.Capacidad2, i.Cantidad AS Cantidadex, i.Cantidad2 AS Cantidadex2 FROM almacenes c , centrodistribucion d, inventario i WHERE c.idCentroDistribucion = d.idCentroDistribucion AND c.idAlmacenes = i.idInventario');
        res.json(almacen);
    }

    public async filtrodia(req: Request, res: Response): Promise<void> {
        const {resp} = req.body;
        const almacen = await pool.query(' SELECT c.idAlmacenes, c.NumeroExterno, c.Nombre, c.Responsable, c.Capacidad, c.Estado, d.Nombre AS centro, c.Capacidad2 FROM almacenes c , centrodistribucion d WHERE c.idCentroDistribucion = d.idCentroDistribucion and c.Responsable like "%s%"' , [resp]);
        res.json(almacen);
    }


  



    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM Almacenes WHERE idAlmacenes = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The almacen doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Almacenes set ?', [req.body]);
        res.json({ message: 'Almacenes Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Almacenes set ? WHERE idAlmacenes = ?', [req.body, id]);
        res.json({ message: "The almacen was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Almacenes WHERE idAlmacenes = ?', [id]);
        res.json({ message: "The almacenes was deleted" });
    }
}

const almacenesController = new AlmacenesController;
export default almacenesController;