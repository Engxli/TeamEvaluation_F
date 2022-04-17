import { observer } from "mobx-react";
import React from "react";
import authStore from "../../Store/authStore";

const SigninPage = ({ toglleSignType, storeInput, sumbitButton }) => {
  const storeUserInput = (event) => {
    storeInput(event);
  };
  return (
    <div className="view show" id="signin-view">
      <h1 className="h2 text-center">Sign in</h1>
      <form className="needs-validation" onSubmit={sumbitButton}>
        <div className="input-group mb-3">
          <i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
          <input
            name="username"
            className="form-control rounded"
            type="text"
            placeholder="Username"
            required
            onChange={storeUserInput}
          ></input>
        </div>
        <div className="input-group mb-3">
          <i className="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
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
          {authStore.signinError ? authStore.signinError.data.detail : false}
        </p>
        <button className="btn btn-primary d-block w-100" type="submit">
          Sign in
        </button>
        <div className="fs-sm pt-3 mb-0 text-center">
          Don't have an account?
          <p
            className="fw-medium"
            data-view="#signup-view"
            onClick={toglleSignType}
          >
            Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default observer(SigninPage);
