import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
//import DashboardLayout from './layouts/DashboardLayout'
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { UserProvider } from "./context/userContext";

class App extends Component {
    render() {
        return (
            <UserProvider>
                <div className="wrapper">
                    <Router>
                        <Switch>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="/home">
                                <Main />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </UserProvider>
        );
    }
}

export default App;
