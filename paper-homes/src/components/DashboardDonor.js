import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";
import PopupDonor from "./PopupDonor";
import { Button } from '@material-ui/core';

class Dashboard extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({ user, setUser }) => (
                    <div className="main">
                    <div className="content">
                        {console.log("asdf")}
                        {console.log(user)}
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="section-title">Donated Addresses</h2>
                                <PopupDonor/>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="card">
                                        <div className="card-header ">
                                            <h3 className="card-title">
                                                <b>123 Somewhere Street</b>
                                            </h3>
                                            <p className="description">
                                                San Francisco, California, USA{" "}
                                                <br /> 941112
                                            </p>
                                        </div>
                                    </div>
                                    <div className="topright">
                                        <div className="status" style={{backgroundColor: '#F6C6C6', color: '#6A0404',padding:'5px 10px'}}>
                                            <i className="fa fa-clock-o"></i>
                                            PENDING VERIFICATION
                                        </div>
                                    </div>
                                    <div>
                                        <Button variant="contained" style={{backgroundColor: '#5C7294', color:'#fff', width: '100vh'}}>
                                            DONATE ANOTHER ADDRESS
                                        </Button>
                                    </div>
                                    {/* 
                                    <div className="bottomright">
                                        <div className="row">
                                            <div className="center">
                                                <p>John Doe</p>
                                            </div>
                                            <div className="card-user avatar">
                                            <img
                                                
                                                src={face3}
                                                alt="..."
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    */}
                                </div>
                            </div>
                        {/*</div>*/}
                        </div>
                    </div>
                  </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default Dashboard;
