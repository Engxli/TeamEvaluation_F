import { makeAutoObservable } from "mobx";
import { frontUrl, instance } from "./instance";
import projectStore from "./projectStore";
import semesterStore from "./semesterStore";

class EvaluationStore {
  link = "";
  evaluation = null;
  judge = null;
  constructor() {
    makeAutoObservable(this);
  }

  getLink = async (semester, project) => {
    try {
      if (project.evaluation) {
        this.link =
          frontUrl +
          "/evaluate/" +
          project.evaluation.id +
          "/" +
          semester.id +
          "/" +
          project.id;
      } else {
        const res = await instance.post("api/evaluation/", {
          project: project.id,
        });
        this.link =
          frontUrl +
          "/evaluate/" +
          res.data.id +
          "/" +
          semester.id +
          "/" +
          project.id;

        await this.getEvaluation(res.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getEvaluation = async (evaId) => {
    try {
      const res = await instance.get(`api/evaluation/`);
      this.evaluation = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addJudge = async (judgeData, navigate) => {
    try {
      const res = await instance.post("api/judge/", judgeData);
      this.judge.push(res.data);
      //   await evaluationStore.getEvaluation();
      navigate(`./${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  getJudge = async () => {
    try {
      const res = await instance.get(`api/judge/`);
      this.judge = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateJudge = async (judge) => {
    try {
      await instance.put(`api/judge/${judge.id}/`, judge);
      //   await evaluationStore.getEvaluation();
      //   await evaluationStore.getJudge();
      //   await projectStore.fetch_project();
      //   await semesterStore.fecth_semesters();
    } catch (error) {
      console.log(error.response);
    }
  };

  lockProject = async (evaluationInfo) => {
    try {
      const res = await instance.put(`api/evaluation/${evaluationInfo.id}/`, {
        ...evaluationInfo,
        isLock: true,
      });

      this.evaluation = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
}

const evaluationStore = new EvaluationStore();
evaluationStore.getEvaluation();
evaluationStore.getJudge();
export default evaluationStore;
