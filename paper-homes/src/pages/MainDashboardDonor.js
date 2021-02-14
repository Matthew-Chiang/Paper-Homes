import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import DashboardDonor from "../components/DashboardDonor";
// import UserProfile from "./UserProfile";
// import SignUp from "../pages/SignUp";
import Sidebar from "../components/Sidebar";
import SidebarDonor from "../components/SidebarDonor";

class Main extends Component {
    render() {
        return (
            <div>
                <SidebarDonor />
                <div className="main-panel">
                    <div>
                        <DashboardDonor/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
