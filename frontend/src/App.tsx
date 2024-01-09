import {useEffect, useState} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

interface City {
    id: number;
    cityName: string;
    count:number
}

function App() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState<City[]>([]);

    console.log(search);
    useEffect(()=>{
        const fetchCities = async () =>{
            const response = await axios.get(`http://localhost:8080/cityList/${search}`);
            setData(response.data);
        };
        if (search.length === 0 || search.length > 1) fetchCities();
    }, [search])

  return (
      <div className="app">
          <input
              className="search"
              placeholder="Enter a city name..."
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <table>
              <tbody>
              <tr>
                  <th>Name</th>
                  <th>Count</th>
              </tr>
              {data.map((city) => (
                  <tr key={city.id}>
                      <td>{city.cityName}</td>
                      <td>{city.count}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
  );
}

export default App
