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
import MainProfile from "./pages/MainProfile";
import MainProfileDonor from "./pages/MainProfileDonor";
import MainDashboardDonor from "./pages/MainDashboardDonor";
import MainDashboard from "./pages/MainDashboard";
import Login from "./components/Login"
import Documents from './pages/MainDocuments'
import MainDocumentsDonor from './pages/MainDocumentsDonor'
import { UserProvider } from "./context/userContext";
import { UserContext } from "./context/userContext";

class App extends Component {
    render() {
        return (
            <UserProvider>
                <UserContext.Consumer>
                {({ user, setUser }) => (
                    <div className="wrapper">
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                        <Login 
                                            data={user}
                                            setData={setUser}/>
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route path="/dashboard">
                                    <MainDashboard
                                      data={user}
                                      setData={setUser} />
                                </Route>
                                <Route path="/profile">
                                    <MainProfile 
                                      data={user}
                                      setData={setUser}/>
                                </Route>
                                <Route path="/donorProfile">
                                    <MainProfileDonor 
                                      data={user}
                                      setData={setUser}/>
                                </Route>
                                <Route path="/donorDashboard">
                                    <MainDashboardDonor/>
                                </Route>
                                <Route path="/documents">
                                    <Documents/>
                                </Route>
                                <Route path="/donorDocuments">
                                    <MainDocumentsDonor/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                )}
                </UserContext.Consumer>
            </UserProvider>
        );
    }
}

export default App;
