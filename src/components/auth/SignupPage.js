import { observer } from "mobx-react";
import React from "react";
import authStore from "../../Store/authStore";

const SignupPage = ({ toglleSignType, storeInput, sumbitButton }) => {
  const storeUserInput = (event) => {
    storeInput(event);
  };

  return (
    <div className="view show" id="signup-view">
      <h1 className="h2 text-center">Sign up</h1>

      <form className="needs-validation" onSubmit={sumbitButton}>
        <div className="mb-3">
          <input
            name="username"
            className="form-control"
            type="text"
            placeholder="Username"
            required
            onChange={storeUserInput}
          ></input>
        </div>
        <div className="mb-3">
          <input
            name="first_name"
            className="form-control"
            type="text"
            placeholder="First name"
            required
            onChange={storeUserInput}
          ></input>
        </div>
        <div className="mb-3">
          <input
            name="last_name"
            className="form-control"
            type="text"
            placeholder="Last name"
            required
            onChange={storeUserInput}
          ></input>
        </div>
        <div className="mb-3">
          <input
            name="email"
            className="form-control"
            type="text"
            placeholder="Email"
            required
            onChange={storeUserInput}
          ></input>
        </div>
        <div className="input-group mb-3">
          <div className="password-toggle w-100">
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="Password"
              required
              onChange={storeUserInput}
            ></input>
          </div>
        </div>
        <p style={{ color: "red" }}>
          {authStore.signupError ? authStore.signupError.data.username : false}
        </p>
        <p style={{ color: "red" }}>
          {authStore.signupError ? authStore.signupError.data.email : false}
        </p>
        <p style={{ color: "red" }}>
          {authStore.signupError ? authStore.signupError.data.password : false}
        </p>
        <button className="btn btn-primary d-block w-100" type="submit">
          Sign up
        </button>
        <div className="fs-sm pt-3 mb-0 text-center">
          Already have an account?
          <p className="fw-medium" onClick={toglleSignType}>
            Sign in
          </p>
        </div>
      </form>
    </div>
  );
};

export default observer(SignupPage);
