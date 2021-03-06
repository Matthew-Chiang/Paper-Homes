import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Documents from "../components/Documents";
// import UserProfile from "./UserProfile";
// import SignUp from "../pages/SignUp";
import SidebarDonor from "../components/SidebarDonor";

class Main extends Component {
    render() {
        return (
            <div style={{height:"-webkit-fill-available"}}>
                <div>
                <SidebarDonor/>
                </div>
                
                <div className="main-panel">
                    <div>
                        <Documents/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
