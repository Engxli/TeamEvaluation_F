import React from "react";
import Auth from "./auth/Auth";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Report from "./report/Report";

const Main = () => {
  return (
    <div>
      {/* <!-- Page content--> */}
      <Navbar />
      {/* MAIN PAGE */}
      <Routes>
        <Route exact path="/" element={<Auth type={true} />} />
        <Route path="/signin" element={<Auth type={true} />} />
        <Route path="/signup" element={<Auth type={false} />} />
        <Route path="/semesters" element={<Home />} />
        <Route path="/report/:semesterId/:projectId/" element={<Report />} />
        <Route
          path="/report/:semesterId/:projectId/:teamId"
          element={<Report />}
        />
      </Routes>
    </div>
  );
};

export default Main;
