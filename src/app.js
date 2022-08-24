import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProjectList from "./containers/project/projectList";
import Login from "./login";
import NavBar from "./navbar";
import Project from "./containers/project/project";

const App = () => {
  return (
    <div className="App">
      <h1>Hornblower Project Managements </h1>

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<ProjectList />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
