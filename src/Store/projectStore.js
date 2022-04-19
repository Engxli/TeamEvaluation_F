import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";

class ProjectStore {
  project = null;

  constructor() {
    makeAutoObservable(this);
  }

  fecth_projects = async () => {
    try {
      const res = await instance.get("api/project/");
      //   console.log(res.data);
      this.project = res.data;
    } catch (error) {
      //   alert(error.response.data);
      console.log(error.response);
    }
  };

  add_project = async (data) => {
    try {
      const res = await instance.post("api/project/", data);
      //   console.log(res.data);
      this.project.push(res.data);
      semesterStore.add_project_to_semester_local(data.semester, data);
    } catch (error) {
      //   alert(error.response.data.name);
      console.log(error);
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fecth_projects();
export default projectStore;
