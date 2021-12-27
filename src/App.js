import NavBar from './View/Layouts/NavBar';
import './App.css';
import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export class App extends Component {
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

        </Routes>
      </Router>
      
    )
  }
}

export default App

