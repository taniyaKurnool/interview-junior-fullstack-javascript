import React, { useState, useEffect, ChangeEvent } from "react";
import axios from 'axios';
import "./SearchBar.css";


interface City {
    uuid: string;
    cityName: string;
    count: number;
}

export const SearchBar: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<City[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<City[]>(`http://localhost:8000/cities`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
};

//   const fetchData = (value:any) => {
//     fetch("")
//   }

//   const handleChange = (value:any) => {
//     setInput(value)
//     fetchData(value)
//   }

return (
    <div className="input-wrapper">
        <input placeholder="Enter City Name" value={searchInput} onChange={handleInputChange} />
        <ul>
            {searchResults.map((city) => (
                <li key={city.uuid}>{`${city.cityName}, ${city.count}`}</li>
            ))}
        </ul>
    </div>
)
}