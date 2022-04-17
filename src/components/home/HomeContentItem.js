import React from "react";

const HomeContentItem = ({ semester }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={semester.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + semester.name.split(" ")[0] + semester.id}
          aria-expanded="false"
          aria-controls={semester.name.split(" ")[0] + semester.id}
        >
          {semester.name}
        </button>
      </h2>
      <div
        className="accordion-collapse collapse"
        id={semester.name.split(" ")[0] + semester.id}
        aria-labelledby={semester.id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p> PROJECT 1 - TEAM A, TEAM B</p>
          <p> PROJECT 2 - No teams yet!</p>
          <p> PROJECT 3 - TEAM A, TEAM B, TEAM C</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContentItem;
