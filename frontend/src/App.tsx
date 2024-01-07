import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
    <div className='App'>
      <div className='search-bar-form'>
      <h1>City search</h1>
        <SearchBar/>
        <div>Results</div>
      </div>
    </div>
  );
}

export default App
