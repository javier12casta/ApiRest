import { Request, Response } from 'express';


import pool from '../database';

class BiometricoController {

    public async list(req: Request, res: Response): Promise<void> {
        const biometrico = await pool.query('SELECT * FROM uibiometrico');
        res.json(biometrico);
    }
}

const biometricoController = new BiometricoController;
export default biometricoController;