import { Request, Response } from 'express';


import pool from '../database';

class ConsecutivoMController {

    public async list(req: Request, res: Response): Promise<void> {
        const consecutivo = await pool.query('SELECT * FROM ConsecutivosMaestro');
        res.json(consecutivo);
    }

      public async actualizartabla(req: Request, res: Response): Promise<void> {
        const consecutivo = await pool.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idCentrosZonales)from centroszonales ),Hasta=(SELECT MAX(idCentrosZonales) from centroszonales) WHERE idConsecutivosMaestro = 1;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idPuntoEntrega)from puntoentrega ),Hasta=(SELECT MAX(idPuntoEntrega) from puntoentrega) WHERE idConsecutivosMaestro = 2;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idUDS)from uds ),Hasta=(SELECT MAX(idUDS) from uds) WHERE idConsecutivosMaestro = 3;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(identregacentrodistribucion)from entregacentrodistribucion),Hasta=(SELECT MAX(identregacentrodistribucion) from entregacentrodistribucion) WHERE idConsecutivosMaestro = 4;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idEntregaBeneficiario)from entregabeneficiario ),Hasta=(SELECT MAX(idEntregaBeneficiario) from entregabeneficiario) WHERE idConsecutivosMaestro = 5;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idEntregaconsumointerno)from entregaconsumointerno ),Hasta=(SELECT MAX(idEntregaconsumointerno) from entregaconsumointerno) WHERE idConsecutivosMaestro = 6;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(iddevoluciones)from devoluciones ),Hasta=(SELECT MAX(iddevoluciones) from devoluciones) WHERE idConsecutivosMaestro = 7;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idBienestarina)from bienestarina ),Hasta=(SELECT MAX(idBienestarina) from bienestarina) WHERE idConsecutivosMaestro = 8;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idBeneficiarios)from beneficiarios ),Hasta=(SELECT MAX(idBeneficiarios) from beneficiarios) WHERE idConsecutivosMaestro = 9;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idRolPersona)from rolpersona ),Hasta=(SELECT MAX(idRolPersona) from rolpersona) WHERE idConsecutivosMaestro = 10;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idUsuarios)from usuarios ),Hasta=(SELECT MAX(idUsuarios) from usuarios) WHERE idConsecutivosMaestro = 11;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListasMaestro)from serviciomodalidad ),Hasta=(SELECT MAX(idListasMaestro) from serviciomodalidad) WHERE idConsecutivosMaestro = 12;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idTipoBienesterina)from referenciabienestarina ),Hasta=(SELECT MAX(idTipoBienesterina) from referenciabienestarina) WHERE idConsecutivosMaestro = 13;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListaPrecios)from listaprecios ),Hasta=(SELECT MAX(idListaPrecios) from listaprecios) WHERE idConsecutivosMaestro = 14;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListadoCursos)from listadocursos ),Hasta=(SELECT MAX(idListadoCursos) from listadocursos) WHERE idConsecutivosMaestro = 15;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idDatosVarios)from datosvarios ),Hasta=(SELECT MAX(idDatosVarios) from datosvarios) WHERE idConsecutivosMaestro = 16;UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idCentroDistribucion)from centrodistribucion ),Hasta=(SELECT MAX(idCentroDistribucion) from centrodistribucion) WHERE idConsecutivosMaestro = 17; ');
        res.json(consecutivo);
    }


    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM ConsecutivosMaestro WHERE idConsecutivosMaestro = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Consecutivo Maestro doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO ConsecutivosMaestro set ?', [req.body]);
        res.json({ message: 'Consecutivo Maestro Interno Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE ConsecutivosMaestro set ? WHERE idConsecutivosMaestro = ?', [req.body, id]);
        res.json({ message: "The Consecutivo Maestro was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ConsecutivosMaestro WHERE idConsecutivosMaestro= ?', [id]);
        res.json({ message: "The Consecutivo Maestro was deleted" });
    }
}

const consecutivoMController = new ConsecutivoMController;
export default consecutivoMController;