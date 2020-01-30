import { Request, Response } from "express";
import pool from "../database";
var custom = {
  Nombre: '',
  };

class BiometricoController {
  val: string | undefined;

  public async list(req: Request, res: Response): Promise<void> {
    const biometrico = await pool.query("SELECT Huella FROM uibiometrico");
    res.json(biometrico);
  }
  public async create(req: Request, res: Response): Promise<void> {
    var valbio = req.body;
    custom = valbio;
    res.json(valbio);
  }
  
  public async valid(req: Request, res: Response): Promise<void> {
    res.json(custom);
  }
}

const biometricoController = new BiometricoController();
export default biometricoController;
