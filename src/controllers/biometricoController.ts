import { Request, Response } from "express";
import pool from "../database";

class BiometricoController {
  public async list(req: Request, res: Response): Promise<void> {
    const biometrico = await pool.query("SELECT Huella FROM uibiometrico");
    res.json(biometrico);
  }

  public async create(req: Request, res: Response): Promise<void> {
    // const result = await pool.query('INSERT INTO CentroDistribucion set ?', [req.body]);
    if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require("node-localstorage").LocalStorage;
      localStorage = new LocalStorage("./localhost:4200");
    }
    localStorage.setItem("myFirstKey", "myFirstValue");
    console.log(localStorage.getItem("myFirstKey"));

    res.json(req.body);
  }
}

const biometricoController = new BiometricoController();
export default biometricoController;
