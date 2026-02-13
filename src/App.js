import React, { useState } from "react";
import { createCourse, deleteCourse } from "./courseFunctions";
import { courses as initialCourses } from "./courses";
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Course Manager</h1>
      <h2>by Academic Data Team</h2>
    </div>
  );
}

export default App;
