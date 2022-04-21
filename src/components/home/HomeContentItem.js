import { observer } from "mobx-react";
import React, { useState } from "react";
import projectStore from "../../Store/projectStore";
import semesterStore from "../../Store/semesterStore";
import ProjectAddModal from "./addModels/ProjectAddModal";
import TeamAddModal from "./addModels/TeamAddModal";

const HomeContentItem = ({ semester }) => {
  const [showAddProject, setShowAddProject] = useState(false);

  const [projectAddData, setProjectAddData] = useState({});

  const hadleProjectData = (e) => {
    setProjectAddData({ ...projectAddData, [e.target.name]: e.target.value });
  };
  const toggleAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const data = { ...projectAddData, semester: semester.id };
    projectStore.add_project(data);
    toggleAddProject();
  };

  let teamList = [];
  semesterStore.semester
    .find((semester_) => semester_.id === semester.id)
    .project.map((project, index) => {
      return project.team;
    })
    .map((teams) => {
      return teams.map((team) => team.name);
    })
    .forEach((names, index) => {
      teamList.push("");
      names.forEach((name) => (teamList[index] += name + ", "));
      // teamList.push(name + " ");
    });

  // console.log(teamList);

  const projectList = semesterStore.semester
    .find((semester_) => semester_.id === semester.id)
    .project.map((project, index) => (
      <div key={project.id}>
        <h6>
          {index + 1}) {project.name}:
        </h6>
        <p key={"q2" + project.id}>
          {" "}
          {teamList[index] === "" ? "No teams yet!" : teamList[index]}
        </p>
        <TeamAddModal
          key={"q" + project.id}
          project={project}
          semester={semester}
        />
        <hr />
      </div>
    ));
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={semester.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#h" + semester.id}
          aria-expanded="false"
          aria-controls={"h" + semester.id}
        >
          {semester.name}
        </button>
      </h2>
      <div
        className="accordion-collapse collapse "
        id={"h" + semester.id}
        aria-labelledby={semester.id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6>Projects</h6>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={toggleAddProject}
            >
              Add Project
            </button>
          </div>
          <hr />
          {showAddProject && (
            <ProjectAddModal
              toggleAddProject={toggleAddProject}
              hadleProjectData={hadleProjectData}
              handleAddProject={handleAddProject}
            />
          )}

          {/* project list */}
          {projectList.length === 0 ? <p>No projects yet!</p> : projectList}
        </div>
      </div>
    </div>
  );
};

export default observer(HomeContentItem);
