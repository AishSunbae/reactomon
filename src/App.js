import NavBar from './components/NavBar';
import './App.css';
import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PokemonListView from './components/PokemonListView';
import Details from './components/Details';

function getHash(input){
  var hash = 0, len = input.length;
  for (var i = 0; i < len; i++) {
    hash  = ((hash << 5) - hash) + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }
  return hash;
}

export class App extends Component {
  state={
    Results: [],
    Details: []
  }
  componentDidMount() {
      const promise = fetch("https://pokeapi.co/api/v2/pokemon").then(resp => resp.json()).then()
      promise.then(res => this.setState({Results: res['results']}))
      promise.then(res => res['results'].map(pokemon => 
          {
              const promiseDetails = fetch(pokemon.url).then(resp => resp.json()).then()
              promiseDetails.then(res => this.setState({Details: [...this.state.Details, res]}))

          })
      )
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <NavBar/>
            </React.Fragment>
            }>
          </Route>
          <Route path='/pokemons' element={
            <React.Fragment>
              <div className='App'>
              <NavBar></NavBar>
                <PokemonListView Results={this.state.Results}/>
              </div>
            </React.Fragment>
          }>
          </Route>
          {this.state.Results.map(pokemon => 
            <Route path={`/pokemons/${pokemon.name}`} element={
              <React.Fragment>
                <NavBar></NavBar>
                <Details pokemonDetail={this.state.Details.filter(pokemonD => pokemonD.name == pokemon.name)[0]}></Details>
              </React.Fragment>
            } key={getHash(pokemon.name)}>
            </Route>
          )}
        </Routes>
      </Router>
      
    )
  }
}

export default App

/*{this.state.Results.map(pokemon => 
            <Route path={`/pokemons/${pokemon.name}`}>
              <React.Fragment>
                <Details pokemonDetail={this.state.Details.map().filter(pokemonD => pokemonD.name == pokemon.name)[0]}></Details>
              </React.Fragment>
            </Route>
          )}*/