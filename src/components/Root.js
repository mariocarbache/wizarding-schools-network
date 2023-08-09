import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import WizardingSchoolsComponent from "./campuses";
import StudentsComponent from "./students";

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/schools" element={<WizardingSchoolsComponent />} />
        <Route path="/students" element={<StudentsComponent />} />
      </Routes>
    </div>
  );
};

export default Root;
