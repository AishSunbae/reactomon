
import React from 'react'
import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './Details';

export default function PokemonListItemView(props) {
    return (

        <div>
            <p>{props.pokemonName}{' '} | {' '}<Link style={linkStyle} className='links' to={`./${props.pokemonName}`}> Details</Link></p>
        </div>    
    )
}
const linkStyle = {
    textDecoration: 'none'
}
//| <Link style={linkStyle} to={props.url}>Details</Link>
/**/