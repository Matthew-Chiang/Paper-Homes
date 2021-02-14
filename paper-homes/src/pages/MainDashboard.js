import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard";
// import UserProfile from "./UserProfile";
// import SignUp from "../pages/SignUp";
import Sidebar from "../components/Sidebar";

class Main extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main-panel">
                    <div>
                        <Navbar />
                        <Dashboard/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
