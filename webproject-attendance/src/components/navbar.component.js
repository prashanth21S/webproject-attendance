import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Students</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">List the Students</Link>
          </li>
          <li className="navbar-item">
          <Link to="/attendance" className="nav-link">Attendance list</Link>
          </li>
          <li className="navbar-item">
          <Link to="/classes" className="nav-link">List Classes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addClasses" className="nav-link">Add Classes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addStudent" className="nav-link">Add Student</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addAttendance" className="nav-link">Add Attendance</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}