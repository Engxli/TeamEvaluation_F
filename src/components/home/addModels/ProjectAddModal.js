import React from "react";

const ProjectAddModal = ({
  toggleAddProject,
  hadleProjectData,
  handleAddProject,
}) => {
  return (
    <div>
      <form onSubmit={handleAddProject}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i> Project name</i>
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={hadleProjectData}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i> Project weight</i>
          </span>
          <input
            type="text"
            name="weight"
            className="form-control"
            onChange={hadleProjectData}
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
            onClick={toggleAddProject}
          >
            CANCEL
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
};

export default ProjectAddModal;
