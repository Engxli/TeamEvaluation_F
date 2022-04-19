import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import semesterStore from "./semesterStore";

class TeamStore {
  constructor() {
    makeAutoObservable(this);
  }

  add_team = async (semesterId, data) => {
    try {
      console.log(data);
      data.forEach(async (team) => {
        const res = await instance.post("api/team/", team);
        semesterStore.add_team_to_semester_local(
          semesterId,
          team.project,
          res.data
        );
      });
    } catch (error) {
      //   alert(error.response.data.name);
      console.log(error);
    }
  };
}

const teamStore = new TeamStore();
export default teamStore;
