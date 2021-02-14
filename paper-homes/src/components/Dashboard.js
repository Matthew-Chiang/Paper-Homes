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
import { Button, colors } from "@material-ui/core";

import { Alert, AlertTitle } from '@material-ui/lab';


import PopupDonor from "../components/PopupDonor";

class Dashboard extends Component {
  state = {
    curtime: new Date(),
    //exptime: new Date(Date.parse("2021-03-20"))//new Date(2021, 6, 24)//.toLocaleString()
  };
  
  getTime = (user) => {
    var time = 0;
    if(user){
      if(user.createddate){
        const createdDate = new Date(Date.parse(user.createddate));
        console.log(user.createddate);
        console.log(createdDate);
        time = 6 +
                    createdDate.getMonth() -
                    this.state.curtime.getMonth() +
                    12 * (createdDate.getFullYear() - this.state.curtime.getFullYear());
        console.log(time);
      }
      else{
        time = 6;
      }
    }
    else{
      time = -1;
    }
    
    
    return (time);
  };

  getMessage = (time) => {
    var message = "";
    if(time >= 0){
      message = ("Expires in " + time + " months");
    }
    else{
      message = ("Expired");
    }
    return(message);
  }

  //to clear this, inspect element and go to Application --> Local Storage and remove the 'hasLoadedBefore' variable
  getPopup = () => {
    if(!localStorage.getItem('hasLoadedBefore')) {
      localStorage.setItem('hasLoadedBefore', "yes");
      return <PopupController />
   }
   return '';
  }


  render() {
    return (
      <UserContext.Consumer>
        {({ user, setUser }) => (
          <div className="main">
            <div className="content">
                <PopupExpiry timeLeft={this.getTime(user)} user={user} setUser={setUser}/>
              {/* {console.log("asdf")}
              {console.log(user)} */}
              <div className="container-fluid">
                <div className="row">
                  <h2 className="section-title">My Address</h2>
                  {/* <PopupDonor/> */}
                  {this.getPopup()}

                  {/*<PopupController />*/}
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <div className="card ">
                      <div className="card-main-address" style={{paddingBottom:'20px'}}>
                        <h3 className="card-title">
                          <b>{user.addressStreet}</b>
                        </h3>
                        <p className="description">
                        {console.log(user.addressCity)}
                          {user.addressCity}, California, USA <br /> {user.addressZip}
                        </p>
                        {!user.none ? null: 
                        
                            <div>
                                <Alert severity="warning">
                                    <AlertTitle>Note</AlertTitle>
                                    You have not provided us an ID yet. That's ok! You can use the provided address for 6 months to get the necessary ID — <strong>Please note, in order to renew your address, you must provide one form of ID you received from using this address</strong>
                                </Alert>
                                {/* <p>NOTE: You have not provided us an ID yet. That's ok, you can use the provided address for 6 months to get the necessary ID.</p> */}
                            </div>
                        }
                        
                      </div>
                    </div>
                    <div className="topright">
                      <div className="stats" status={this.getTime(user)>2?"purple":"red"}>
                        <i className="fa fa-clock-o"></i>
                        {console.log(user)}
                        {this.getMessage(this.getTime(user))}
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
                        <div className="col-md-2" style={{maxWidth:"20%",maxHeight:"auto", flex:"0 0 19%"}}>
                          <div className="hands">
                            <div className="center vcenter" style={{padding:"30px 0px"}}>
                              <img className="hands" src={hand1} alt="..." />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card-header ">
                            <h4 className="card-title">
                              <b>Get Your ID</b>
                            </h4>
                          </div>
                          <div className="card-body ">
                            <div>
                                <p className="description">
                                Print out the forms under “Documents” and go to
                                your nearest homeless service provider.
                                </p>
                            </div>
                            <div style={{marginTop:'-5px'}}>
                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        // marginBottom: "20px",
                                        // width: "200px",
                                        // marginLeft: "5px",
                                        padding: "5px 10px",
                                        fontSize: 10
                                    }}>Documents</Button>
                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        // marginBottom: "20px",
                                        // width: "200px",
                                        marginLeft: "15px",
                                        padding: "5px 10px",
                                        fontSize: 10
                                    }}>Your nearest homeless service provider</Button>
                            </div>
                            </div>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-2" style={{maxWidth:"20%",maxHeight:"auto", flex:"0 0 19%"}}>
                          <div className="hands">
                            <div className="center vcenter" style={{padding:"30px 0px"}}>
                              <img className="hands" src={hand2} alt="..." />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card-header ">
                            <h4 className="card-title">
                              <b>Apply for Health Care Benefits</b>
                            </h4>
                          </div>
                          <div className="card-body ">
                              <div>
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
                                apply.
                                </p>
                                </div>
                                <div>
                                <div style={{marginTop:'-5px'}}>
                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        // marginBottom: "20px",
                                        // width: "200px",
                                        // marginLeft: "5px",
                                        padding: "5px 10px",
                                        fontSize: 10
                                    }}>Apply for Governement Benefits</Button>
                            </div>
                                </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-2" style={{maxWidth:"20%",maxHeight:"auto", flex:"0 0 19%"}}>
                          <div className="hands">
                            <div className="center vcenter" style={{padding:"30px 0px"}}>
                              <img className="hands" src={hand3} alt="..." />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card-header ">
                            <h4 className="card-title">
                              <b>Apply for Jobs</b>
                            </h4>
                          </div>
                          <div className="card-body ">
                              <div>
                              <p className="description">
                              Find out about jobs you are eligible to apply to.{" "}
                            </p>
                              </div>
                            
                            <div style={{marginTop:'-5px'}}>
                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        // marginBottom: "20px",
                                        // width: "200px",
                                        // marginLeft: "5px",
                                        padding: "5px 10px",
                                        fontSize: 10
                                    }}>Documents</Button>
                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#5C7294",
                                        color: "#fff",
                                        // marginBottom: "20px",
                                        // width: "200px",
                                        marginLeft: "15px",
                                        padding: "5px 10px",
                                        fontSize: 10
                                    }}>Your nearest homeless service provider</Button>
                            </div>
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
