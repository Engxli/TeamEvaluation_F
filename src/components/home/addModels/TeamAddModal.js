import React, { useState } from "react";
import teamStore from "../../../Store/teamStore";

const TeamAddModal = ({ project, semester }) => {
  const [showAddTeam, setShowAddTeam] = useState(false);

  const [teamAddData, setTeamAddData] = useState({});

  const hadleTeamData = (e) => {
    setTeamAddData({ ...teamAddData, [e.target.name]: e.target.value });
  };
  const toggleAddTeam = () => {
    setShowAddTeam(!showAddTeam);
  };

  const handleAddTeam = (e) => {
    e.preventDefault();
    // , project: project.id
    let data = { ...teamAddData };
    console.log(project);
    data = data.name //teama, teamb, teamc,, ,, ,, ,
      .replace(/\s/g, "")
      .split(",")
      .filter((name) => name !== "")
      .map((name) => {
        return { name: name, project: project.id };
      });
    teamStore.add_team(semester.id, data);
    toggleAddTeam();
  };

  return (
    <div>
      <div
        style={{
          width: "fit-content",
          marginLeft: "auto",
        }}
      >
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={toggleAddTeam}
        >
          Add team
        </button>
        <button
          style={{ marginLeft: "5px" }}
          className="btn btn-outline-secondary btn-sm"
          onClick={() => console.log("clicked")}
        >
          View project
        </button>
      </div>
      {showAddTeam && (
        <div>
          <hr />
          <form onSubmit={handleAddTeam}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i> Team names</i>
              </span>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter team names separated by a comma ','"
                onChange={hadleTeamData}
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
                onClick={toggleAddTeam}
                type="button"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeamAddModal;
