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
                  {(!user.none) ? (<h3>Here is the ID you provided for us to download:</h3>): null
                
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
                    <h3>Looks like you're missing a few pieces of ID. Follow the <br/>instructions below to get your ID:</h3>: null
                  }
                  {
                    !user.birthCert ? <DocumentCard heading={"Birth Certificate"} buttonText={"Download Form"} buttonText2={"Find your nearest homeless service provider"} 
                    buttonText3={"County Recorder's Office"}
                    text={
                      <div className="description">
                        <p>Step 1: Download the pre-filled fee waiver form. If you don't have access to a printer, go to step 2</p>
                        <p>Step 2: Visit your nearest homeless service provider and have them sign the pre-filled form. If you did not print the form, ask them for a birth certificate fee waiver also called a "Affidavit of Homeless Status"</p>
                        <p>Step 3: Take your signed form to the County Recorder's Office. Start at the Information Desk and let them know you are there to get a copy of your birth certificate</p>
                      </div>
                      }>

                    </DocumentCard>: null
                  }
                  {
                    !user.calid ? <DocumentCard heading={"California Card"} buttonText={"Find your nearest homeless service provider"} buttonText2={"Find your nearest local California DMV"} 
                    text={
                      <div className="description">
                        <p>Step 1: Make sure you have a copy of your birth certificate</p>
                        <p>Step 2: Visit your nearest homeless service provider and ask them for a birth certificate "fee waiver" to get a free California photo ID</p>
                        <p>Step 3: If you do not know your SSN number, ask your nearest homeless service provider to write a letter stating that you are homeless and do not have your SSN number</p>
                        <p>Step 4: Take your signed form, birth certificate, and SSN (or letter) to the local California DMV and ask for an Identification Card Application</p>
                      </div>
                      }>

                    </DocumentCard>: null
                  }
                  {
                    !user.ssn ? <DocumentCard heading={"SSN Card"} buttonText={"Download Filled Form"} buttonText2={"Download New Form"} buttonText3={"Find you closest Social Security Office"} 
                    text={
                      <div className="description">
                        <p>In Person:</p>
                        <p>Step 1: Download the pre-filled form below or printa blank form.</p>
                        <p>Step 2: Mail the form to the closest Social Security Office or visit in person</p>
                        <p></p>
                        <p>Online:</p>
                        <p>Step 1: Create a my security account.</p>
                        <p>Step 2: Fill in the online form</p>
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
