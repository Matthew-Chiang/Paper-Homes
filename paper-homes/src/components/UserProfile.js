import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face3 from "../assets/img/faces/face-3.jpg"
var firebaseConfig = {
  apiKey: "AIzaSyDtY3EfI2UIPsiSG-9PJrEQWclJ1ppAmdg",
  authDomain: "paperhomes-44719.firebaseapp.com",
  projectId: "paperhomes-44719",
  storageBucket: "paperhomes-44719.appspot.com",
  messagingSenderId: "1005204187826",
  appId: "1:1005204187826:web:49b167432e401c891977ab"
};
class UserProfile extends Component {
  //this.props.data[];
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row"><h2 className="section-title">Personal Information</h2></div>
          <div>Name:</div>
          <div>John Doe</div>
          <div>Mail Forwarding Address:</div>
          <div>123 Somewhere Street</div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-image">
                  <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <Link to='/'>
                      <img className="avatar border-gray" src={face3} alt="..." />
                      <h5 className="title">Mike Andrew</h5>
                    </Link>
                    <p className="description">
                      michael24
                    </p>
                  </div>
                  <p className="description text-center">
                    "Lamborghini Mercy
                      <br /> Your chick she so thirsty
                      <br /> I'm in that two seat Lambo"
                  </p>
                </div>
                <hr />
                <div className="button-container mr-auto ml-auto">
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-facebook-square"></i>
                  </button>
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-twitter"></i>
                  </button>
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-google-plus-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile