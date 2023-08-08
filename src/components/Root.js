import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import WizardingSchoolsComponent from "./allCampuses";

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/schools/" element={<WizardingSchoolsComponent />} />
      </Routes>
    </div>
  );
};

export default Root;
