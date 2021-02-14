import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";
import PopupController from "../pages/PopupController";
import PopupDonor from "../components/PopupDonor";

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
                                <h2 className="section-title">My Address</h2>
                                {/* <PopupDonor/> */}
                                <PopupController/>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="card ">
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
                                        <div className="stats" status="purple" style={{padding: '5px 10px'}}>
                                            <i className="fa fa-clock-o"></i>
                                            EXPIRES IN 6 MONTHS
                                        </div>
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
                        <div className="row">
                            <h2 className="section-title">What's Next?</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="hands">
                                                <div className="center vcenter">
                                                    <img
                                                        className="hands"
                                                        src={hand1}
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-header ">
                                                <h4 className="card-title">
                                                    <b>Get Your ID</b>
                                                </h4>
                                            </div>
                                            <div className="card-body ">
                                                <p className="description">
                                                Print out the forms under “Documents” and go to your nearest homeless service provider.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="hands">
                                                <div className="center vcenter">
                                                    <img
                                                        className="hands"
                                                        src={hand2}
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-header ">
                                                <h4 className="card-title">
                                                    <b>Apply for Health Care Benefits</b>
                                                </h4>
                                            </div>
                                            <div className="card-body ">
                                                <p className="description">
                                                Head to <a href="www.dhcs.ca.gov/" style={{color: '#1c1c1c'}}>www.dhcs.ca.gov</a> to learn more about Medi-Cal and how you can apply.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="hands">
                                                <div className="center vcenter">
                                                    <img
                                                        className="hands"
                                                        src={hand3}
                                                        alt="..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-header ">
                                                <h4 className="card-title">
                                                    <b>Apply for Jobs</b>
                                                </h4>
                                            </div>
                                            <div className="card-body ">
                                                <p className="description">
                                                Find out about jobs you are eligible to apply to.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default Dashboard;
