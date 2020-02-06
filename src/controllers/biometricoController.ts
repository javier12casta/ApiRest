import { Request, Response } from "express";
import pool from "../database";
var custom = {
  id:'',
  Nombre: '',
  };
  var custom2 = {
    Huella1:'',
    Huella2: '',
    };
class BiometricoController {

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

  public async create2(req: Request, res: Response): Promise<void> {
    var valbio = req.body;
    custom2 = valbio;
    res.json(valbio);
  }
  
  public async guardar(req: Request, res: Response): Promise<void> {
    res.json(custom2);
  }
}

const biometricoController = new BiometricoController();
export default biometricoController;
