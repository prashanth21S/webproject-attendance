import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Classes = props => (
  <tr>
    <td>{props.classes.className}</td>
    <td>{props.classes.teacherName}</td>
  </tr>
)

export default class ClassesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        classesList:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/classes/')
      .then(response => {
        this.setState({ classesList: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  classList() {
    return this.state.classesList.map(currentClass => {
      return <Classes classes={currentClass}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Classes List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Class</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.classList()
              }


          </tbody>
        </table>
      </div>
    )
  }
}