import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="blue">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Dashboard
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Manage Addresses</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/profile'>
                <i className="nc-icon nc-circle-09"></i>
                <p>Personal Information</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                <i className="nc-icon nc-settings-gear-64"></i>
                <p>Help</p>
              </NavLink>
            </li>

          </ul>
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