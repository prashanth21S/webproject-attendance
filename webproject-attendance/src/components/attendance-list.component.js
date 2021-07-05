import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Attendance = props => (
  <tr>
    <td>{props.attendance.usn}</td>
    <td>{props.attendance.className}</td>
    <td>{props.attendance.present.toString()}</td>
  </tr>
)

export default class AttendanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        attendances:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/attendance/')
      .then(response => {
        this.setState({ attendances: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  attendanceList() {
    return this.state.attendances.map(currentAttendance => {
      return <Attendance attendance={currentAttendance}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Attendance List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>USN</th>
              <th>Class</th>
              <th>Presence</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.attendanceList()
              }


          </tbody>
        </table>
      </div>
    )
  }
}