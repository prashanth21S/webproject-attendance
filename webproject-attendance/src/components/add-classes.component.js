import React, { Component } from 'react';
import axios from 'axios';


export default class ClassesAdd extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeClassName = this.onChangeClassName.bind(this);
      this.onChangeTeacherName = this.onChangeTeacherName.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        className: '',
        teacherName:'',

      }
    }
    onChangeClassName(e) {
        this.setState({
            className: e.target.value
        })
      }
      onChangeTeacherName(e) {
        this.setState({
            teacherName: e.target.value
        })
      } 
      onSubmit(e) {
        e.preventDefault();

        const classes = {
            className: this.state.className,
            teacherName:this.state.teacherName,
          }
        console.log(classes);


        axios.post('http://localhost:5000/classes/add', classes)
        .then(res => console.log(res.data));


        window.location = '/';


        }
        render() {
            return (
              <div>
                <h3>Create New Class</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                    <label>Class Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.className}
                        onChange={this.onChangeClassName}
                        />
                  </div>
                  <div className="form-group"> 
                    <label>Teacher Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.teacherName}
                        onChange={this.onChangeTeacherName}
                        />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Create Class" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            )
          }
        }

