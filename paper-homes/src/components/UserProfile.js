import React, { Component } from "react";
import { Link } from "react-router-dom";
import face3 from "../assets/img/faces/face-3.jpg";
import axios from "axios";
import { UserContext } from "../context/userContext";
import FileUploader from "./FileUpload";

class UserProfile extends Component {
    state = {
        user: {},
        curtime: new Date(),
        exptime: new Date(2021, 6, 24), //.toLocaleString()
        uploaded: false,
    };
    /*
    componentDidMount() {
        // console.log("printing data")
        // console.log(this.props.data)
        axios
            //.get(`http://localhost:5000/user/${this.props.data["email"]}`)
            .get(`http://localhost:5000/user/testing@gmail.com`)
            .then((res) => {
                const user = res.data;
                this.setState({ user }, () => {
                    console.log(user);
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }
    */
    render() {
        const time =
            this.state.exptime.getMonth() -
            this.state.curtime.getMonth() +
            12 *
                (this.state.exptime.getFullYear() -
                    this.state.curtime.getFullYear());
        console.log(time);

        const uploadSuccessful = () => {
          this.state.uploaded = !this.state.uploaded 
        }

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
                            {user.firstName}
                            {user.lastName}
                        </div>
                        <br />
                        <div className="section-head">
                            Mail Forwarding Address:
                        </div>
                        <div className="section-info">
                            {user.mailAddress}
                        </div>
                        
                        {(!user.none) ? (
                        <div><h3 className="section-head">To see the ID that you provided for verification, please see the Documents tab in the sidebar</h3></div>)
                        : <div><h3>It looks like you haven't uploaded an ID yet. <br/>Click below to upload your ID:</h3> 
                        <FileUploader setImageUploaded={()=>{}}/></div>
                        }
                        {/* {uploadSuccessful ? <p>File Uploaded Successfully!</p> : null} */}
                        
                    </div>
                </div>
            </div>
            )}
            </UserContext.Consumer>
        );
    }
}

export default UserProfile;
