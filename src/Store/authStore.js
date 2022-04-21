import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import projectStore from "./projectStore";
import semesterStore from "./semesterStore";

class AuthStore {
  user = null;
  signinError = false;
  signupError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  };

  unSetUser = () => {
    localStorage.removeItem("token");
    this.user = null;
  };

  signup = async (userData, navigate) => {
    try {
      await instance.post("/api/users/", userData);
      await this.signin(userData, navigate);
      this.signupError = false;
      //   console.log(res.data);
    } catch (error) {
      // const err = error as axios.
      //   console.log(error.response);
      this.signupError = error.response;
    }
  };

  signin = async (userData, navigate) => {
    try {
      const res = await instance.post("/api/jwt/create/", userData);
      //   console.log(res.data);
      this.setUser(res.data.access);
      const res2 = await instance.get("/api/users/me/");
      //   console.log(res2.data);
      this.user = res2.data;
      this.signinError = false;
      await semesterStore.fecth_semesters();
      navigate("/semesters");
    } catch (error) {
      //   console.log(error.response);
      this.signinError = error.response;
    }
  };

  checkForToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // console.log(token);
        this.setUser(token);
        const res2 = await instance.get("/api/users/me/");
        this.user = res2.data;
        await semesterStore.fecth_semesters();
        // console.log(res2.data);
      } catch (error) {
        // console.log(error);
        this.unSetUser();
      }
    } else this.unSetUser();
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
