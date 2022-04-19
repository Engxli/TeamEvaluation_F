import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "../../Store/authStore";
import semesterStore from "../../Store/semesterStore";
import HomeSideBar from "./HomeSideBar";
import HomeContent from "./HomeContent";

const Home = () => {
  // semesterStore.semester && console.log("object") : console.log("dsd");
  //   navigation
  const navigate = useNavigate();

  //   if not logged in navigate to signin
  useEffect(() => {
    // console.log(authStore.user);
    !authStore.user && navigate("/signin");
  });

  return (
    <div
      className="container position-relative zindex-5 pb-4 mb-md-3"
      style={{ marginTop: " 100px" }}
    >
      <div className="row">
        {/* here add the side bar */}

        <HomeSideBar />

        <HomeContent semesters={semesterStore.semester} />
      </div>
    </div>
  );
};

export default observer(Home);
