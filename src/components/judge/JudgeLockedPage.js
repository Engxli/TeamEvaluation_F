import React from "react";
import errorImage from "../../image/lock.svg";

const JudgeLockedPage = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center pt-5 mt-n6"
      style={{ flex: "1 0 auto" }}
    >
      <div className="pt-7 pb-5">
        <div className="text-center mb-2 pb-4">
          <h1 className="mb-5">
            <img className="d-inline-block" src={errorImage} alt="Error 404" />
            <span className="visually-hidden">Project is locked!</span>
          </h1>
          <h2>Project is locked!</h2>
          <p className="pb-2">
            This project is locked by admin, you can no longer use this link!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JudgeLockedPage;
