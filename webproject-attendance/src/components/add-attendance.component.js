import React, { Component } from 'react';
import axios from 'axios';


export default class AttendanceAdd extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUSN = this.onChangeUSN.bind(this);
        this.onChangeClassName = this.onChangeClassName.bind(this);
        this.onChangePresent = this.onChangePresent.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          usn: '',
          className: '',
          present: false,
          usns:[],
          classesList:[]
        }
      }


      componentDidMount() {
        axios.get('http://localhost:5000/student')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                usns: response.data.map(student => student.usn),
                usn: response.data[0].usn
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
    

      componentDidMount() {
        axios.get('http://localhost:5000/classes')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                classesList: response.data.map(classes => classes.className),
                className: response.data[0].className
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }

    
      onChangeUSN(e) {
        this.setState({
          usn: e.target.value
        })
      }
    
      onChangeClassName(e) {
        this.setState({
          className: e.target.value
        })
      }
    
      onChangePresent(e) {
        this.setState({
          present: e.target.value
        })
      }
    
    
      onSubmit(e) {
        e.preventDefault();
    
        const attendance = {
          usn: this.state.usn,
          className: this.state.className,
          present: this.state.present
        }
    
        console.log(attendance);
    
        axios.post('http://localhost:5000/attendance/add', attendance)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
    
      render() {
        return (
        <div>
          <h3>Attendance Update</h3>
          <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <label>USN: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.usn}
                  onChange={this.onChangeUSN}
                  />
            </div>
            <div className="form-group"> 
              <label>Class: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.className}
                  onChange={this.onChangeClassName}>
                  {
                    this.state.classesList.map(function(classes) {
                      return <option 
                        key={classes}
                        value={classes}>{classes}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group">
              <label>Presence: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.present}
                  onChange={this.onChangePresent}
                  />
            </div>
    
            <div className="form-group">
              <input type="submit" value="Add attendance Details" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }
