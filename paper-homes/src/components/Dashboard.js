import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";

class Dashboard extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({ user, setUser }) => (
                    <div className="content">
                        {console.log("asdf")}
                        {console.log(user)}
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="section-title">My Address</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h3 className="card-title">
                                                <b>123 Somewhere Street</b>
                                            </h3>
                                            <br />
                                            <p className="description">
                                                San Francisco, California, USA{" "}
                                                <br /> A1A 2B2
                                            </p>
                                        </div>
                                    </div>
                                    <div className="topright">
                                        <div className="stats" status="purple">
                                            <i className="fa fa-clock-o"></i>{" "}
                                            Expires in 6 months
                                        </div>
                                    </div>
                                    <div className="bottomright">
                                        <div className="row">
                                            <div className="center">
                                                {" "}
                                                <p>John Doe</p>{" "}
                                            </div>
                                            <img
                                                className="avatar border-gray"
                                                src={face3}
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                    Lorem Ipsum laofdf sodfsj
                                                    sdjgosdjg{" "}
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
                                                    <b>Get Your ID</b>
                                                </h4>
                                            </div>
                                            <div className="card-body ">
                                                <p className="description">
                                                    Lorem Ipsum laofdf sodfsj
                                                    sdjgosdjg{" "}
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
                                                    <b>Get Your ID</b>
                                                </h4>
                                            </div>
                                            <div className="card-body ">
                                                <p className="description">
                                                    Lorem Ipsum laofdf sodfsj
                                                    sdjgosdjg{" "}
                                                </p>
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
