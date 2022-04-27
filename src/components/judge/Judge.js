import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import evaluationStore from "../../Store/evaluationStore";
import semesterStore from "../../Store/semesterStore";
import NotFound404 from "../report/NotFound404";
import JudgeLockedPage from "./JudgeLockedPage";
import JudgeMark from "./JudgeMark";
import JudgeName from "./JudgeName";

const Judge = () => {
  const { evaluationId, semesterId, projectId, judgeId } = useParams();

  const semester = semesterStore.semester
    ? semesterStore.semester.find((semester) => semester.id === +semesterId)
    : "";
  const project = semester
    ? semester.project.find((project) => project.id === +projectId)
    : "";
  const evaluation = evaluationStore.evaluation
    ? evaluationStore.evaluation.find((eva) => eva.id === evaluationId)
    : "";

  const judge = evaluationStore.judge
    ? evaluationStore.judge.find((judge) => judge.id === +judgeId)
    : "";

  return evaluation &&
    semester &&
    project &&
    judgeId &&
    judge &&
    !evaluation.isLock ? (
    // <JudgeName evaluation={evaluation} semester={semester} project={project} />
    <JudgeMark judge={judge} project={project} semester={semester} />
  ) : evaluation && semester && project && !judgeId && !evaluation.isLock ? (
    <JudgeName evaluation={evaluation} semester={semester} project={project} />
  ) : evaluation && evaluation.isLock ? (
    <JudgeLockedPage />
  ) : (
    <NotFound404 />
  );
};

export default observer(Judge);
