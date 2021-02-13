import logo from './logo.svg';
import './App.css';
//import DashboardLayout from './layouts/DashboardLayout'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

class App extends Component {
  render(){
  return (
    <div className="wrapper">
      <Router>
        <Sidebar />
        <Route path='/' component={Main} />
      </Router>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
  }
}

export default App;
