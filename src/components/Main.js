import React from "react";
import Auth from "./auth/Auth";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      {/* <!-- Page content--> */}
      <Navbar />
      {/* MAIN PAGE */}
      <Auth />
    </div>
  );
};

export default Main;
