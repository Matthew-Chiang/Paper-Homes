import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import SignUp from "../pages/SignUp";
import Sidebar from "../components/Sidebar";

class Main extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main-panel">
                    <div>
                        
                        <Switch>
                            <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <Route
                                exact
                                path="/profile"
                                component={UserProfile}
                            />
                        </Switch>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
