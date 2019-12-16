import { Request, Response } from 'express';


import pool from '../database';

class ListaCController {

    public async list(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT * FROM ListadoCursos');
        res.json(lista);
    }

    public async tablac(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT c.idListadoCursos , c.NombreAgenteE , c.NumeroDocumento ,DATE_FORMAT(c.Fecha,"%d-%m-%Y") as Fecha ,c.Estado , t.NombreTipo as tipodocumento,CONCAT(m.PrimerNombre," " ,m.SegundoNombre," " , m.PrimerApellido," " , m.SegundoApellido) As nombrecompleto , ce.NombreCentroZonal FROM listadocursos c, beneficiarios m, tipodocumento t , centroszonales ce where c.idBenefiarios = m.idBeneficiarios AND c.idTipoDocumento = t.idTipoDocumento and c.idCentrosZonales = ce.idCentrosZonales ');
        res.json(lista);
    }  

    public async tablap(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT c.idListadoCursos , c.NombreAgenteE , c.NumeroDocumento ,DATE_FORMAT(c.Fecha,"%d-%m-%Y") as Fecha ,c.Estado , t.NombreTipo as tipodocumento,CONCAT(m.PrimerNombre," " ,m.SegundoNombre," " , m.PrimerApellido," " , m.SegundoApellido) As nombrecompleto , pe.NombrePE FROM listadocursos c, beneficiarios m, tipodocumento t , puntoentrega pe where c.idBenefiarios = m.idBeneficiarios AND c.idTipoDocumento = t.idTipoDocumento and c.idPuntoEntrega = pe.idPuntoEntrega');
        res.json(lista);
    }  

    public async tablau(req: Request, res: Response): Promise<void> {
        const lista = await pool.query('SELECT c.idListadoCursos , c.NombreAgenteE , c.NumeroDocumento ,DATE_FORMAT(c.Fecha,"%d-%m-%Y") as Fecha ,c.Estado , t.NombreTipo as tipodocumento,CONCAT(m.PrimerNombre," " ,m.SegundoNombre," " , m.PrimerApellido," " , m.SegundoApellido) As nombrecompleto , u.NombreUDS FROM listadocursos c, beneficiarios m, tipodocumento t , uds u where c.idBenefiarios = m.idBeneficiarios AND c.idTipoDocumento = t.idTipoDocumento and c.idUDS = u.idUDS');
        res.json(lista);
    }  


    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ListadoCursos WHERE idListadoCursos = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Listado Cursos doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ListadoCursos set ?', [req.body]);
        res.json({ message: 'Listado Cursos Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ListadoCursos set ? WHERE idListadoCursos = ?', [req.body, id]);
        res.json({ message: "The Listado Cursos was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ListadoCursos WHERE idListadoCursos = ?', [id]);
        res.json({ message: "The Listado Cursos was deleted" });
    }
}

const listaCController = new ListaCController;
export default listaCController;