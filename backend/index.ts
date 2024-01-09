import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mysql = require ("mysql");
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
app.use(cors());

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'citysearch'
});

database.connect();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

class City {
  public id: number;
  public cityName: string;
  public count: number;
  constructor(id: number, cityName: string, count: number) {
    this.id = id;
    this.cityName = cityName;
    this.count = count;
  }
}

// Returns a list of cities matching the search entry submitted from the frontend
app.get('/cityList/:search', (req: Request, res: Response) => {
  const searchTerm: string = req.params.search;
  const searchQuery: string =`SELECT * FROM cities WHERE cityName LIKE "${searchTerm}%" `;

  database.query(searchQuery,(err: mysql.MysqlError | null, results: any)=> {
    if(err) return res.json(err);
    return res.json(results);
  })
});

// CRUD
app.post('/city', (req: Request, res: Response) => {
  const cityName: string = req.body.cityName;
  const count: number = req.body.count;
  const createQuery: string = "INSERT INTO cities (cityName, count) VALUES (?, ?);";

  database.query(createQuery,[cityName, count], (err: mysql.MysqlError | null)=> {
    if(err) return res.json(err);
    return res.sendStatus(201);
  })
});

app.get('/cities', (req: Request, res: Response) => {
  const readAllQuery: string ="SELECT * FROM cities";
  database.query(readAllQuery, (err: mysql.MysqlError | null, results: any)=> {
    if(err) return res.json(err);
    return res.json(results);
  })
});

app.get('/city/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const readQuery: string = "SELECT * FROM cities WHERE id = ?;";

  database.query(readQuery, [id], (err: mysql.MysqlError | null, results: any)=> {
    if(err) return res.json(err);
    return res.json(results);
  })
});

app.put('/city/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const cityName: string = req.body.cityName;
  const count: number = req.body.count;
  const updateQuery: string = "UPDATE cities SET cityName = ?, count = ? WHERE id = ?;";

  database.query(updateQuery, [cityName, count, id], (err: mysql.MysqlError | null, results: any)=> {
    if(err) return res.json(err);
    return res.sendStatus(200);
  })
});

app.delete('/city/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const deleteQuery: string = "DELETE FROM cities WHERE id = ?;";

  database.query(deleteQuery, [id], (err: mysql.MysqlError | null, results: any)=> {
    if(err) return res.json(err);
    return res.sendStatus(200);
  })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
