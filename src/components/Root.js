import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import WizardingSchoolsComponent from "./campuses";
import StudentsComponent from "./students";
import Navbar from "./navbar";
import SingleSchoolComponent from "./campus";
import SingleStudentComponent from "./student";

const Root = () => {
  return (
    <div className="navigation">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/schools" element={<WizardingSchoolsComponent />} />
        <Route path="/students" element={<StudentsComponent />} />
        <Route path="/schools/:id" element={<SingleSchoolComponent />} />
        <Route path="/students/:id" element={<SingleStudentComponent />} />
      </Routes>
    </div>
  );
};

export default Root;
