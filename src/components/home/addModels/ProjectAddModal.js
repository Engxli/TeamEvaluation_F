import { observer } from "mobx-react";
import React, { useState } from "react";
import projectStore from "../../../Store/projectStore";
import CriteriaAddModal from "./CriteriaAddModal";

const ProjectAddModal = ({
  toggleAddProject,
  hadleProjectData,
  handleAddProject,
}) => {
  //

  const selectList = projectStore.criteria
    ? projectStore.criteria.map((criteria) => {
        return (
          <option value={criteria.id} key={criteria.id}>
            {criteria.name} - {criteria.weight}
          </option>
        );
      })
    : "";

  const [handleDataCriteria, setHandleDataCriteria] = useState({});
  const [handleShowCriteria, setHandleShowCriteria] = useState(false);

  // 1
  const toggleDataCriteria = () => {
    setHandleShowCriteria(!handleShowCriteria);
  };

  // 2
  const handleInputCriteria = (e) => {
    setHandleDataCriteria({
      ...handleDataCriteria,
      [e.target.name]: e.target.value,
    });
  };

  // 3
  const handleSubmmitCriteria = (e) => {
    e.preventDefault();
    projectStore.add_criteria(handleDataCriteria);
    toggleDataCriteria();
  };

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
        <div className="mb-3">
          <h6>
            Criteria{" "}
            <span
              className="ai-info"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Press 'ctl + select' to select more than one criteria"
            ></span>
          </h6>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <select
                className="form-select"
                id="multiselect-input"
                size="3"
                style={{ width: "75%" }}
                onChange={(e) => {
                  // console.log(
                  //   [...e.target.selectedOptions].map((option) => option.value)
                  // );

                  const myE = {
                    target: {
                      name: "criteria",
                      value: [...e.target.selectedOptions].map(
                        (option) => option.value
                      ),
                    },
                  };
                  hadleProjectData(myE);
                }}
                multiple
              >
                {/* <option value="5">Option item 1</option>
            <option value="6">Option item 2</option>
            <option value="7">Option item 3</option>
            <option value="9">Option item 4</option>
            <option value="8">Option item 5</option>
          <option value="10">Option item 6</option> */}
                {selectList}
              </select>
              <button
                type="button"
                className="btn btn-outline-secondary btn-icon"
                style={{ height: "fit-content" }}
                onClick={toggleDataCriteria}
              >
                <i className="ai-plus-square"> </i> Add criteria
              </button>
            </div>
          </div>
        </div>
        {!handleShowCriteria && (
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
              type="button"
            >
              CANCEL
            </button>
          </div>
        )}

        <hr />
      </form>
      {handleShowCriteria && (
        <CriteriaAddModal
          toggleDataCriteria={toggleDataCriteria}
          handleInputCriteria={handleInputCriteria}
          handleSubmmitCriteria={handleSubmmitCriteria}
        />
      )}
    </div>
  );
};

export default observer(ProjectAddModal);
