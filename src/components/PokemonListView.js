import React, { Component } from 'react'
import PokemonListItemView from './PokemonListItemView';

function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
  }
  
export class PokemonListView extends Component {
    render() {
      return (
          this.props.Results.map(pokemon => <PokemonListItemView key={getHash(pokemon.name)} pokemonName={pokemon.name}></PokemonListItemView>)
          )
    }
}

export default PokemonListView
