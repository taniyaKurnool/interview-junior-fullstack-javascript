import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { Results } from './components/Results';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <div className='search-bar-form'>
      <h1>City search</h1>
        <SearchBar/>
        <Results/>
      </div>
    </div>
  );
}

export default App
