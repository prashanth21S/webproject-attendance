import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>{props.student.studname}</td>
    <td>{props.student.semester}</td>
    <td>{props.student.section}</td>
    <td>{props.student.usn}</td>
  </tr>
)

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        studentList:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/student/')
      .then(response => {
        this.setState({ studentList: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  studentGet() {
    return this.state.studentList.map(currentStudent => {
      return <Student student={currentStudent}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Student Details</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Semester</th>
              <th>Section</th>
              <th>USN</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.studentGet()
              }


          </tbody>
        </table>
      </div>
    )
  }
}