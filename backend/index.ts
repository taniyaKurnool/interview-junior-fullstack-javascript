import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000 ;


app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/citiesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

interface City {
  _id: string;
  name: string;
  country: string;
}

const citySchema = new mongoose.Schema<City>({
  name: String,
  country: String,
  // Add more fields as needed
});

const CityModel = mongoose.model<City>('City', citySchema);

// CRUD endpoints
app.get('/cities', async (_req: Request, res: Response) => {
  try {
    const cities = await CityModel.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/cities', async (req: Request, res: Response) => {
  const { name, country } = req.body;
  const newCity = new CityModel({ name, country });
  try {
    const savedCity = await newCity.save();
    res.json(savedCity);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Implement update and delete endpoints similarly

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });