import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";

class ProjectStore {
  criteria = null;
  constructor() {
    makeAutoObservable(this);
  }

  fetch_criteria = async () => {
    try {
      const res = await instance.get("api/criteria/");
      this.criteria = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  add_project = async (data) => {
    try {
      const res = await instance.post("api/project/", data);
      //   console.log(res.data);
      semesterStore.add_project_to_semester_local(data.semester, res.data);
    } catch (error) {
      //   alert(error.response.data.name);
      console.log(error.response);
    }
  };

  add_criteria = async (data) => {
    try {
      const res = await instance.post("api/criteria/", data);
      this.criteria.push(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fetch_criteria();
export default projectStore;
