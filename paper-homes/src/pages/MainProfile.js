import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
// import Dashboard from "./Dashboard";
import UserProfile from "../components/UserProfile";
// import SignUp from "../pages/SignUp";
import Sidebar from "../components/Sidebar";

class Main extends Component {
    render() {
        return (
            <div>
                
                <Sidebar />
                <div className="main-panel">
                    <div>
                        <UserProfile
                            data={this.props.data}
                            setData={this.props.setData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
