import React, { useEffect, useState } from "react";
import authStore from "../../Store/authStore";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

const Auth = ({ type }) => {
  // to choose between signin and signup
  const [signType, setSignType] = useState(type);
  const toglleSignType = () => {
    setUser({});
    setSignType(!signType);
  };

  //   navigation
  const navigate = useNavigate();

  //   if logged in navigate to home
  useEffect(() => {
    authStore.user ? navigate("/home") : console.log("not user");
  });

  // keep the input values inside this object
  const [user, setUser] = useState({});
  const storeInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const sumbitButton = (e) => {
    e.preventDefault();
    signType
      ? authStore.signin(user, navigate)
      : authStore.signup(user, navigate);
  };
  return (
    <section
      className="container d-flex justify-content-center align-items-center pt-7 pb-4"
      style={{ flex: "1 0 auto" }}
    >
      <div className="signin-form mt-3">
        <div className="signin-form-inner">
          {/* HERE SIGN IN OR UP PAGE GOES */}
          {signType ? (
            <SigninPage
              toglleSignType={toglleSignType}
              storeInput={storeInput}
              sumbitButton={sumbitButton}
            />
          ) : (
            <SignupPage
              toglleSignType={toglleSignType}
              storeInput={storeInput}
              sumbitButton={sumbitButton}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default observer(Auth);
