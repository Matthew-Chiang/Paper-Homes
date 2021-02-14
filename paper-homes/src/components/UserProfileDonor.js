import React, { Component } from "react";
import { Link } from "react-router-dom";
import face3 from "../assets/img/faces/face-3.jpg";
import axios from "axios";
import { UserContext } from "../context/userContext";

class UserProfile extends Component {
    state = {
        user: {},
        curtime: new Date(),
        exptime: new Date(2021, 6, 24), //.toLocaleString()
    };
    
    render() {
        const time =
            this.state.exptime.getMonth() -
            this.state.curtime.getMonth() +
            12 *
                (this.state.exptime.getFullYear() -
                    this.state.curtime.getFullYear());
        console.log(time);

        return (
            <UserContext.Consumer>
            {({ user, setUser }) => (
            <div className="main">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="section-title">
                                Personal Information
                            </h2>
                        </div>
                        <div className="section-head">Name:</div>
                        <div className="section-info">
                            {console.log(user)}
                            {console.log(user["firstName"])}
                            {user["firstName"] + " " + user["lastName"]}
                            
                        </div>
                        <br />
                        
                    </div>
                </div>
            </div>
            )}
            </UserContext.Consumer>
        );
    }
}

export default UserProfile;
