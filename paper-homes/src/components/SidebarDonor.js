import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo1 from "../assets/img/logodash.png"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="darkazure">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              <div className="center">
                <img src={logo1} alt="..."/>
              </div>
            </Link>
          </div>
          <div className="sidebar-pages hcenter">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/DonorDashboard'>
                {/*<i className="nc-icon nc-chart-pie-35"></i>*/}
                <p>Manage Addresses</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                {/*<i className="nc-icon nc-circle-09"></i>*/}
                <p>Personal Information</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                {/*<i className="nc-icon nc-settings-gear-64"></i>*/}
                <p>Documents</p>
              </NavLink>
            </li>

          </ul>
          </div>
          <div className="bottomleft">
            <div className="log-out">
            <Link className="nav-link" to='/'>
              <span className="no-icon">Log out</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar