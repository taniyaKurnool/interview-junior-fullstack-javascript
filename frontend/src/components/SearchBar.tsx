import React, {useState} from "react";
import "./SearchBar.css";



export const SearchBar = () => {
  const [input, setInput] = useState("")

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