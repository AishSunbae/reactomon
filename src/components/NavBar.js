import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <header style={headerStyle}>
            <h1>pokeWeb</h1>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> | <Link style={linkStyle} to="/types">Types</Link>| <Link style={linkStyle} to="/about">About</Link>
            </header>
        )
    }
}
const linkStyle = {
    color:'#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default NavBar
