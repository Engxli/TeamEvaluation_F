import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";

class ProjectStore {
  constructor() {
    makeAutoObservable(this);
  }

  add_project = async (data) => {
    try {
      const res = await instance.post("api/project/", data);
      //   console.log(res.data);
      semesterStore.add_project_to_semester_local(data.semester, res.data);
    } catch (error) {
      //   alert(error.response.data.name);
      console.log(error);
    }
  };
}

const projectStore = new ProjectStore();
export default projectStore;
