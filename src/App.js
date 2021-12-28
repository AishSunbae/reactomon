import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import './App.css';
import PokemonTypes from './components/PokemonTypes';

const App = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    const getTypes = async () => {
      const pokemonTypesFromApi = await fetchPokemonTypes()
      setTypes(pokemonTypesFromApi)
    }

    getTypes()
  }, [])

  
  const fetchPokemonTypes = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const data = await res.json()

    return data
  }

    return (
      <Router>
      <div className='container'>
        <NavBar/>
        <Routes>
          <Route path='/types' element={<PokemonTypes types={types} />} />
        </Routes>
      </div>
    </Router>
      
    )
  }

export default App

