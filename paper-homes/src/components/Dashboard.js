import axios from "axios";
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsShow.png";

class Dashboard extends Component {
    getDocument = () => {
        console.log("getting doc");
        axios
            .get(`http://localhost:5000/pdf/waiveFeeBirthCert/nameFromReact`)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <a
                        href="http://localhost:5000/pdf/waiveFeeBirthCert/nameFromReact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            onClick={() => {
                                this.getDocument();
                            }}
                        >
                            download form
                        </button>
                    </a>
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
                                        San Francisco, California, USA <br />{" "}
                                        A1A 2B2
                                    </p>
                                </div>

                                <div className="card-body "></div>
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
                                        <img
                                            className="avatar border-gray"
                                            src={hand1}
                                            alt="..."
                                        />
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
            </div>
        );
    }
}

export default Dashboard;
