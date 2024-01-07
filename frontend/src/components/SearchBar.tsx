import React, {useState, useEffect, ChangeEvent} from "react";
import axios from 'axios';
import "./SearchBar.css";


interface City {
    _id: string;
    name: string;
    country: string;
  }

export const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<City[]>([]);

  const fetchData = (value:any) => {
    fetch("")
  }

  const handleChange = (value:any) => {
    setInput(value)
    fetchData(value)
  }

    return (
        <div className="input-wrapper">
            <input placeholder="Enter City Name" value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}