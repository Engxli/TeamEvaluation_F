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
      //   alert(error.response.data);

      console.log(error.response);
    }
  };

  add_semester = async (data) => {
    try {
      const res = await instance.post("api/semester/", data);
      //   console.log(res.data);
      this.semester.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };

  add_project_to_semester_local = (semesterId, project) => {
    const theSemester = this.semester.find(
      (semester) => semester.id === semesterId
    );
    theSemester.project.push(project);
    console.log(this.semester);
  };
}

const semesterStore = new SemesterStore();
semesterStore.fecth_semesters();
export default semesterStore;
