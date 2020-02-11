import { Request, Response } from 'express';


import pool from '../database';

class EntregabeController {

    public async list(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT * FROM entregabeneficiario');
        res.json(entrega);
    }

    public async tabla(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT e.idEntregaBeneficiario, e.lote, DATE_FORMAT(e.fechavencimiento,"%d-%m-%Y") as fechavencimiento, e.cantidad,e.unidad,a.Nombres as NombrePadre, CONCAT(b.PrimerNombre,"",b.SegundoNombre," ",b.PrimerApellido," ", b.SegundoApellido) as Nombrecompleto, c.Nombre as centrodistribucion,al.Nombre as almacenes,r.TipoBienesterina FROM entregabeneficiario e, almacenes al, acudientes a, beneficiarios b, centrodistribucion c, referenciabienestarina r WHERE e.idAcudientes = a.idAcudientes AND e.idBeneficiarios = b.idBeneficiarios AND e.idCentroDistribucion = c.idCentroDistribucion AND e.idAlmacenes = al.idAlmacenes AND e.idTipoBienesterina = r.idTipoBienesterina');
        res.json(entrega);
    }

    public async tabla1(req: Request, res: Response): Promise<void> {
        const entrega = await pool.query('SELECT e.idEntregaBeneficiario, e.lote,e.unidad,a.Nombres as NombrePadre,a.Parentesco , b.PrimerNombre,b.SegundoNombre,b.PrimerApellido, b.SegundoApellido ,r.TipoBienesterina FROM entregabeneficiario e, almacenes al, acudientes a, beneficiarios b, centrodistribucion c, referenciabienestarina r WHERE e.idAcudientes = a.idAcudientes AND e.idBeneficiarios = b.idBeneficiarios AND e.idCentroDistribucion = c.idCentroDistribucion AND e.idAlmacenes = al.idAlmacenes AND e.idTipoBienesterina = r.idTipoBienesterina ');
        res.json(entrega);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM entregabeneficiario WHERE idEntregaBeneficiario = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The entrega beneficiario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO entregabeneficiario set ?', [req.body]);
        res.json({ message: 'Entrega beneficiario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE entregabeneficiario set ? WHERE idEntregaBeneficiario = ?', [req.body, id]);
        res.json({ message: "The entrega beneficiario was Updated" });
    }
}

const entregabeController = new EntregabeController;
export default entregabeController;