import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
// import Dashboard from "./Dashboard";
import UserProfileDonor from "../components/UserProfileDonor";
// import SignUp from "../pages/SignUp";
import SidebarDonor from "../components/SidebarDonor";

class Main extends Component {
    render() {
        return (
            <div style={{height:"-webkit-fill-available"}}>
                <SidebarDonor />
                <div className="main-panel">
                    <div>
                        <UserProfileDonor
                            data={this.props.data}
                            setData={this.props.setData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
