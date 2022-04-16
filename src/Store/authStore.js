import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class AuthStore {
  user = null;
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

  signup = async (userData) => {
    try {
      // user = { username: "Ali Ahmad", password: "123KDD"}
      await instance.post("/api/users/", userData);
      await this.signin(userData);
      //   console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      // user = { username: "Ali Ahmad", password: "123KDD"}
      const res = await instance.post("/api/jwt/create/", userData);
      //   console.log(res.data);
      this.setUser(res.data.access);
      const res2 = await instance.get("/api/users/me/");
      //   console.log(res2.data);
      this.user = res2.data;
    } catch (error) {
      console.log(error);
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
