import React, { useState } from "react";
import authStore from "../../Store/authStore";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";

const Auth = () => {
  // to choose between signin and signup
  const [signType, setSignType] = useState(true);
  const toglleSignType = () => {
    setUser({});
    setSignType(!signType);
  };

  // keep the input values inside this object
  const [user, setUser] = useState({});
  const storeInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const sumbitButton = (e) => {
    e.preventDefault();
    signType ? authStore.signin(user) : authStore.signup(user);
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

export default Auth;
