import React from "react";
import Auth from "./auth/Auth";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Report from "./report/Report";
import ShareLinkModal from "./report/ShareLinkModal";
import Judge from "./judge/Judge";

const Main = () => {
  return (
    <div>
      {/* <!-- Page content--> */}
      <ShareLinkModal />
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
        <Route
          path="/evaluate/:evaluationId/:semesterId/:projectId/"
          element={<Judge />}
        />
        <Route
          path="/evaluate/:evaluationId/:semesterId/:projectId/:judgeId"
          element={<Judge />}
        />
      </Routes>
    </div>
  );
};

export default Main;
