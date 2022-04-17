import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "../Store/authStore";
const Home = () => {
  //   navigation
  const navigate = useNavigate();

  //   if not logged in navigate to signin
  useEffect(() => {
    !authStore.user ? navigate("/signin") : console.log("a user");
  });
  return <div></div>;
};

export default observer(Home);
