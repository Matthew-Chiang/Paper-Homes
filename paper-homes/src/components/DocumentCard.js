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


import PopupDonor from "./PopupDonor";

class Dashboard extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {({ user, setUser }) => (
        <div>
            <div className="card-header ">
                <h4 className="card-title">
                <b>{this.props.heading}</b>
                </h4>
            </div>
            <div className="card-body ">
                {this.props.text}
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
                </div>
            </div>
        </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Dashboard;
