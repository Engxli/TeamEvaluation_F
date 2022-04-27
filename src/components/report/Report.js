import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import semesterStore from "../../Store/semesterStore";
import NotFound404 from "./NotFound404";
import ReportDetial from "./ReportDetial";

const Report = () => {
  const { projectId, semesterId, teamId } = useParams();

  const semester = semesterStore.semester
    ? semesterStore.semester.find((semester) => semester.id === +semesterId)
    : "";

  const project = semester
    ? semester.project.find((project) => project.id === +projectId)
    : "";

  return project ? (
    <ReportDetial project={project} teamId={teamId} semester={semester} />
  ) : (
    <NotFound404 />
  );
};

export default observer(Report);
