import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class SemesterStore {
  semester = null;

  constructor() {
    makeAutoObservable(this);
  }

  fecth_semesters = async () => {
    try {
      const res = await instance.get("api/semester/");
      //   console.log(res.data);
      this.semester = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
}

const semesterStore = new SemesterStore();
semesterStore.fecth_semesters();
export default semesterStore;
