import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp'
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
      <SignUp/>
    </div>
    */
  );
  }
}

export default App;
