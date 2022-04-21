import React from "react";

const CriteriaAddModal = ({
  toggleDataCriteria,
  handleInputCriteria,
  handleSubmmitCriteria,
}) => {
  // handleAddTeam
  //handleDataTeam
  // ToggelShowTeam

  return (
    <div>
      <form onSubmit={handleSubmmitCriteria}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i> Criteria name</i>
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleInputCriteria}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i> Criteria weight</i>
          </span>
          <input
            type="text"
            className="form-control"
            name="weight"
            onChange={handleInputCriteria}
          />
        </div>
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
          }}
        >
          <button
            className="btn btn-link"
            style={{ marginRight: "10px", padding: "5px" }}
            type="submit"
          >
            SAVE
          </button>
          <button
            className="btn btn-link"
            style={{ padding: "5px" }}
            onClick={toggleDataCriteria}
            type="button"
          >
            CANCEL
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default CriteriaAddModal;
