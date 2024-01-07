import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// Read cities from the JSON file
const citiesPath = '/Users/taniya.kurnool/Projekte/interview-junior-fullstack-javascript/database/cities.json';
let cities: { uuid: number; cityName: string; count: number }[] = [];

try {
  const citiesData = fs.readFileSync(citiesPath, 'utf-8');
  cities = JSON.parse(citiesData);
} catch (error) {
  console.error('Error reading cities data:', error);
}

// Endpoint to get cities
app.get('/cities', (_req: Request, res: Response) => {
  res.json(cities);
});

// Rest of the code remains unchanged

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });