import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import StudentList from "./components/student-list.component"
import AttendanceList from "./components/attendance-list.component"
import AttendanceAdd from "./components/add-attendance.component"
import ClassesAdd from "./components/add-classes.component"
import ClassesList from "./components/classes-list.component"
import StudentAdd from "./components/addstudent.component"


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
      <br/>
      <Route path="/" exact component={StudentList} />
      <Route path="/addAttendance" exact component={AttendanceAdd} />
      <Route path="/addClasses" exact component={ClassesAdd} />
      <Route path="/attendance" exact component={AttendanceList} />
      <Route path="/addStudent" exact component={StudentAdd} />
      <Route path="/classes" exact component={ClassesList} />
      </div>
    </Router>

  );
}

export default App;
