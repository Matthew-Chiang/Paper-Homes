import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import face3 from "../assets/img/faces/face-1.jpg";
import hand1 from "../assets/img/hands/HandsPhone.png";
import hand2 from "../assets/img/hands/HandsGive.png";
import hand3 from "../assets/img/hands/HandsShow.png";
import { UserContext } from "../context/userContext";
import PopupController from "../pages/PopupController";
import PopupExpiry from "./PopupExpiry";
import axios from "axios";
import { Button, colors } from "@material-ui/core";
import DocumentCard from './DocumentCard'


import PopupDonor from "./PopupDonor";

class Documents extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {({ user, setUser }) => (
          <div className="main">
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="section-title">Documents</h2>
                </div>
                <div style={{marginLeft:"-15px"}}>
                  {user.none ? null: 
                    <h3>Here is the ID you provided for us to download:</h3>
                  }
                  {
                    user.birthCert ? <Button variant="contained"
                    style={{
                      backgroundColor: "#5C7294",
                      color: "#fff",
                      margin: "10px",
                      // width: "200px",
                      marginLeft: "0px",
                      padding: "5px 10px",
                      // fontSize: 10
                  }}>Birth Certificate</Button>: null
                  }
                  {
                    user.ssn ? <Button variant="contained"
                    style={{
                      backgroundColor: "#5C7294",
                      color: "#fff",
                      margin: "10px",
                      // width: "200px",
                      marginLeft: "0px",
                      padding: "5px 10px",
                      // fontSize: 10
                  }}>SSN Card</Button>: null
                  }
                  {
                    user.calid ? <Button variant="contained"
                    style={{
                      backgroundColor: "#5C7294",
                      color: "#fff",
                      margin: "10px",
                      // width: "200px",
                      marginLeft: "0px",
                      padding: "5px 10px",
                      // fontSize: 10
                  }}>California ID Card</Button>: null
                  }
                  {
                    user.passport ? <Button variant="contained"
                    style={{
                      backgroundColor: "#5C7294",
                      color: "#fff",
                      margin: "10px",
                      // width: "200px",
                      marginLeft: "0px",
                      padding: "5px 10px",
                      // fontSize: 10
                  }}>Passport</Button>: null
                  }
                  
                </div>
                <div style={{marginLeft:"-15px"}}>
                  {(!user.birthCert || !user.ssn || !user.calid || !user.passport) ?  
                    <h3>Looks like you're missing a few pieces of ID. Follow the instructions below to get your ID:</h3>: null
                  }
                  {
                    !user.birthCert ? <DocumentCard heading={"Birth Certificate"} buttonText={"Download Form"} 
                    text={
                      <div className="description">
                        <p>Step 1: Download the pre-filled fee waiver form. If you don't have access to a printer, go to step 2</p>
                        <p>Step 2: Visit your nearlest homeless service provider and have them sign the pre-filled form. If you did not print the form, ask them for a birth certificate fee waiver</p>
                      </div>
                      }>

                    </DocumentCard>: null
                  }
                  {
                    !user.calid ? <DocumentCard heading={"California Card"} buttonText={"Download Form"} 
                    text={
                      <div className="description">
                        <p>Step 1: Make sure you have a copy of your birth certificate</p>
                        <p>Step 2: Visit your nearlest homeless service provider and have them sign the pre-filled form. If you did not print the form, ask them for a birth certificate fee waiver</p>
                      </div>
                      }>

                    </DocumentCard>: null
                  }
                  {
                    !user.ssn ? <DocumentCard heading={"SSN Card"} buttonText={"Download Form"} 
                    text={
                      <div className="description">
                        <p>Step 1: Download the pre-filled fee waiver form. If you don't have access to a printer, go to step 2</p>
                        <p>Step 2: Visit your nearlest homeless service provider and have them sign the pre-filled form. If you did not print the form, ask them for a birth certificate fee waiver</p>
                      </div>
                      }>

                    </DocumentCard>: null
                  }                  
                </div>
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Documents;
