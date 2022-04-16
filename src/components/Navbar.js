import { observer } from "mobx-react";
import React from "react";
import authStore from "../Store/authStore";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow">
      <div className="container px-0 px-xl-3" style={{ position: "relative" }}>
        <div
          className="navbar-brand order-lg-1 me-0 pe-lg-2 me-lg-4"
          style={{
            width: "100%",
          }}
        >
          <h2>TEAM EVALWATION</h2>
        </div>
        <div
          className="d-flex align-items-center order-lg-3"
          style={{
            position: "absolute",
            right: "10px",
          }}
        >
          {authStore.user && (
            <div className="navbar-tool dropdown">
              <p className="navbar-tool-label dropdown-toggle">
                <small>Hello,</small>
                {authStore.user.first_name} {authStore.user.last_name}
              </p>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ width: "15rem" }}
              >
                <li>
                  <div
                    onClick={authStore.unSetUser}
                    className="dropdown-item d-flex align-items-center"
                  >
                    <i className="ai-log-out fs-base opacity-60 me-2"></i>
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default observer(Navbar);
