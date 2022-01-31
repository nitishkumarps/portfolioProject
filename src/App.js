import React from "react";
import "./App.css";
import "./css/commonstyles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Profile from "./components/Profile/Profile";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="container-fluid container-bg">
      <div className="row">
        <div className="col-sm-4">
          <Profile />
        </div>
        <div className="col-sm-8">
          <WorkExperience />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}

export default App;
