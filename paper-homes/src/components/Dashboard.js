import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";
import PopupController from "../pages/PopupController";
import PopupExpiry from "../components/PopupExpiry";
import axios from "axios";
import { colors } from "@material-ui/core";

import PopupDonor from "../components/PopupDonor";

class Dashboard extends Component {
  state = {
    curtime: new Date(),
    //exptime: new Date(Date.parse("2021-03-20"))//new Date(2021, 6, 24)//.toLocaleString()
  };
  // componentDidMount() {
  //     axios
  //         .get(`http://localhost:5000/user/${this.props.data.email}`)
  //         .then((res) => {
  //             const user = res.data;
  //             this.setState({ user }, () => {
  //                 console.log(user);
  //             });
  //         })
  //         .catch((e) => {
  //             console.log(e);
  //         });
  // }

  
  getTime = (user) => {
    const createdDate = new Date(Date.parse(user.createddate));
    return (
      6 +
      createdDate.getMonth() -
      this.state.curtime.getMonth() +
      12 * (createdDate.getFullYear() - this.state.curtime.getFullYear())
    );
  };

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
                  <PopupController />
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <div className="card ">
                      <div className="card-header ">
                        <h3 className="card-title">
                          <b>{user.addressStreet}</b>
                        </h3>
                        <p className="description">
                          {user.addressCity}, California, USA <br /> {user.addressZip}
                        </p>
                      </div>
                    </div>
                    <div className="topright">
                      <div className="stats" status={this.getTime(user)>2?"purple":"red"}>
                        <i className="fa fa-clock-o"></i>
                        Expires in {this.getTime(user)} months
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
                              <img className="hands" src={hand1} alt="..." />
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
                              Print out the forms under “Documents” and go to
                              your nearest homeless service provider.{" "}
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
                              <img className="hands" src={hand2} alt="..." />
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
                              Head to{" "}
                              <a
                                href="www.dhcs.ca.gov/"
                                style={{
                                  color: "#1c1c1c",
                                }}
                              >
                                www.dhcs.ca.gov
                              </a>{" "}
                              to learn more about Medi-Cal and how you can
                              apply.{" "}
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
                              <img className="hands" src={hand3} alt="..." />
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
