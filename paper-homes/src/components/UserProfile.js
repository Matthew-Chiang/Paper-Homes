import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face3 from "../assets/img/faces/face-3.jpg"
import axios from "axios";

class UserProfile extends Component {
  
  state = {
    user:{},
    curtime: new Date(),
    exptime: new Date(2021, 6, 24)//.toLocaleString()
  }
  componentDidMount(){
    // console.log("printing data")
    // console.log(this.props.data)
    axios
        //.get(`http://localhost:5000/user/${this.props.data["email"]}`)
        .get(`http://localhost:5000/user/testing@gmail.com`)
        .then((res) => {
          const user = res.data
          this.setState({user},()=>{console.log(user)})
 
        })
        .catch((e) => {
            console.log(e);
        });
      }
  render() {
    const time = this.state.exptime.getMonth() - this.state.curtime.getMonth() + (12 * (this.state.exptime.getFullYear() - this.state.curtime.getFullYear()))
    console.log(time);

    return (
      <div className="main">
      <div className="content">
        <div className="container-fluid">
          <div className="row"><h2 className="section-title">Personal Information</h2></div>
          <div className="section-head">Name:</div>
          <div className="section-info">
            { this.state.user["firstName"]} { this.state.user["lastName"]} 
          </div>
          <br/>
          <div className="section-head">Mail Forwarding Address:</div>
          <div className="section-info">{ this.state.user["mailAddress"]}</div>
        </div>
      </div>
      </div>
    )
  }
}

export default UserProfile