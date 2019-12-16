import { Request, Response } from 'express';


import pool from '../database';

class BeneficiariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query('SELECT * FROM Beneficiarios');
        res.json(beneficiario);
    }

    public async id(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query('SELECT MAX(idBeneficiarios) AS id FROM beneficiarios');
        res.json(beneficiario);
    }

    public async beneficiariosabla(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query(' SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombreUDS FROM beneficiarios c, genero m, tipodocumento t , uds u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idUDS = u.idUDS');
        res.json(beneficiario);
    }

    public async beneficiariosablap(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query(' SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombrePE FROM beneficiarios c, genero m, tipodocumento t , puntoentrega u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idPuntoEntrega = u.idPuntoEntrega');
        res.json(beneficiario);
    }

    public async beneficiariosablac(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query('SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombreCentroZonal FROM beneficiarios c, genero m, tipodocumento t , centroszonales u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idCentrosZonales = u.idCentrosZonales');
        res.json(beneficiario);
    }

    public async beneficiariosreporte(req: Request, res: Response): Promise<void> {
        const beneficiario = await pool.query('SELECT c.idBeneficiarios, c.NumeroDocumento, c.FechaIngreso, c.FechaNacimiento, c.PrimerNombre, c.PrimerApellido, c.SegundoNombre, c.Direccion, c.Pais, c.Departamento, c.Municipio, c.TelefonoFijo, c.TelefonoFijo2,c.TelefonoMovil, c.TelefonoMovil2, c.Email, c.Estado, g.NombreGenero, t.NombreTipo, c.SegundoApellido, c.ServicioOmodalidad FROM beneficiarios c , tipodocumento t , genero g where c.idTipoDocumento = t.idTipoDocumento and c.idGenero = g.idGenero ');
        res.json(beneficiario);
    }

   

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * , DATE_FORMAT(FechaNacimiento,"%Y-%m-%d")AS FechaNacimiento, DATE_FORMAT(FechaIngreso,"%Y-%m-%d")AS FechaIngreso FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The beneficiario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Beneficiarios set ?', [req.body]);
        res.json({ message: 'Beneficiario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Beneficiarios set ? WHERE idBeneficiarios = ?', [req.body, id]);
        res.json({ message: "The beneficiario was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
        res.json({ message: "The beneficiario was deleted" });
    }
}

const beneficiariosController = new BeneficiariosController;
export default beneficiariosController;