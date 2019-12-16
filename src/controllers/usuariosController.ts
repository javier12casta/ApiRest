import { Request, Response } from 'express';


import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT * FROM Usuarios');
        res.json(Usuarios);
    }

    public async tablausuariosc(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento, DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, c.NombreCentroZonal FROM usuarios u, tipodocumento t , centroszonales c , rolpersona r WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idCentrosZonales = c.idCentrosZonales;');
        res.json(Usuarios);
    }

    public async tablausuariosp(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento, DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, p.NombrePE FROM usuarios u, tipodocumento t, rolpersona r, puntoentrega p WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idPuntoEntrega = p.idPuntoEntrega;');
        res.json(Usuarios);
    }

    public async tablausuariosu(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento,DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, ud.NombreUDS FROM usuarios u, tipodocumento t, rolpersona r, uds ud WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idUDS = ud.idUDS;');
        res.json(Usuarios);
    }

    public async tablausuariosr(req: Request, res: Response): Promise<void> {
        const Usuarios = await pool.query('SELECT c.idUsuarios, c.Nombres, c.Apellidos, c.Estado, c.NumeroDocumento, c.FechaIngreso, c.NombreUsuarioSistema, c.Direccion, c.TelefonoFijo, c.TelefonoFijo2, c.TelefonoMovil, c.TelefonoMovil2, c.Email, t.NombreTipo, r.RolPersona FROM usuarios c , tipodocumento t , rolpersona r WHERE c.idTipoDocumento = t.idTipoDocumento and c.TipoUsuario = r.idRolPersona ');
        res.json(Usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT *, DATE_FORMAT(FechaIngreso,"%Y-%m-%d")AS FechaIngreso FROM Usuarios WHERE idUsuarios = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Usuario doesn't exits" });
    }

    public async getuser(req: Request, res: Response): Promise<any> {
        const {user} = req.params;
        const games = await pool.query('SELECT * FROM `usuarios` WHERE NombreUsuarioSistema = ?', [user] );
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The Usuario doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Usuarios set ?', [req.body]);
        res.json({ message: 'Usuario Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE Usuarios set ? WHERE idUsuarios = ?', [req.body, id]);
        res.json({ message: "The Usuario was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Usuarios WHERE idUsuarios = ?', [id]);
        res.json({ message: "The Usuarios was deleted" });
    }
}

const usuariosController = new UsuariosController;
export default usuariosController;