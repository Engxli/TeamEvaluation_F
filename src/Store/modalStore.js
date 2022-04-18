import { makeAutoObservable } from "mobx";

class ModalStore {
  title = "Loading..";
  desc = "Please wait......";
  firstButton = "Close";
  secondButton = "";
  showFirstButton = true;
  showSecondButton = false;
  constructor() {
    makeAutoObservable(this);
  }

  setModalInfo = (title, desc, firstB, secondB, showFB, showSB) => {
    this.title = title;
    this.desc = desc;
    this.firstButton = firstB;
    this.secondButton = secondB;
    this.showFirstButton = showFB;
    this.showSecondButton = showSB;
  };
}

const modalStore = new ModalStore();
export default modalStore;
