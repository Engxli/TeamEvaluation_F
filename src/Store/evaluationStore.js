import { makeAutoObservable } from "mobx";
import { baseUrl, instance } from "./instance";

class EvaluationStore {
  link = "";
  constructor() {
    makeAutoObservable(this);
  }

  getLink = async (project) => {
    try {
      if (project.evaluation) {
        this.link = baseUrl + "/evaluate/" + project.evaluation.id;
      } else {
        const res = await instance.post("api/evaluation/", {
          project: project.id,
        });
        this.link = baseUrl + "/evaluate/" + res.data.id;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const evaluationStore = new EvaluationStore();
export default evaluationStore;
