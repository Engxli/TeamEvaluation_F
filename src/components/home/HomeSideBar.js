import { observer } from "mobx-react";
import React from "react";
import authStore from "../../Store/authStore";

const HomeSideBar = () => {
  const user = authStore.user ? authStore.user : "";
  return (
    <div className="col-lg-4 mb-4 mb-lg-0">
      <div className="bg-light rounded-3 shadow-lg">
        <div className="px-4 py-4 mb-1 text-center">
          <h6 className="mb-0 pt-1">
            {user.first_name} {user.last_name}
          </h6>
          <span className="text-muted fs-sm">@{user.username}</span>
        </div>
        <div className="d-lg-none px-4 pb-4 text-center">
          <a
            className="btn btn-primary px-5 mb-2"
            href="#account-menu"
            data-bs-toggle="collapse"
          >
            <i className="ai-menu me-2"></i>Account menu
          </a>
        </div>
        <div className="d-lg-block collapse pb-2" id="account-menu">
          <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
            Dashboard
          </h3>
          <a
            className="d-flex align-items-center nav-link-style px-4 py-3 active"
            href="dashboard-orders.html"
          >
            <i className="fs-lg opacity-60 me-2"></i>Semesters
          </a>

          <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
            Account settings
          </h3>

          <a
            className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
            href="signin-illustration.html"
          >
            <i className="ai-log-out fs-lg opacity-60 me-2"></i>Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default observer(HomeSideBar);
