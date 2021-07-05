import React, { Component } from 'react';
import axios from 'axios';


export default class StudentAdd extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeStudName = this.onChangeStudName.bind(this);
      this.onChangeSemester = this.onChangeSemester.bind(this);
      this.onChangeSection = this.onChangeSection.bind(this);
      this.onChangeUSN = this.onChangeUSN.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        studname: '',
        semester: 0,
        section: '',
        usn: '',
      }
    }
    onChangeStudName(e) {
        this.setState({
            studname: e.target.value
        })
      }
      onChangeSemester(e) {
        this.setState({
            semester: e.target.value
        })
      } 
      onChangeSection(e) {
        this.setState({
            section: e.target.value
        })
      }
      onChangeUSN(e) {
        this.setState({
            usn: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();

        const student = {
            studname:this.state.studname,
            semester:this.state.semester,
            section:this.state.section,
            usn:this.state.usn,
        }
        console.log(student);


        axios.post('http://localhost:5000/student/add', student)
        .then(res => console.log(res.data));

        window.location = '/';


        }

        render() {
            return (
              <div>
                <h3>Add Student</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                    <label>Student Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.studname}
                        onChange={this.onChangeStudName}
                        />
                  </div>
                  <div className="form-group"> 
                    <label>Semester: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.semester}
                        onChange={this.onChangeSemester}
                        />
                  </div>
                  <div className="form-group"> 
                    <label>Section: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.section}
                        onChange={this.onChangeSection}
                        />
                  </div>
                  <div className="form-group"> 
                    <label>USN: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.usn}
                        onChange={this.onChangeUSN}
                        />
                  </div>               
                  <div className="form-group">
                    <input type="submit" value="Create Student" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            )
          }
        }

