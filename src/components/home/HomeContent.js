import { observer } from "mobx-react";
import React, { useState } from "react";
import semesterStore from "../../Store/semesterStore";
import HomeAddContentItem from "./HomeAddContentItem";
import HomeContentItem from "./HomeContentItem";

const HomeContent = ({ semesters }) => {
  const semesterList =
    semesters && semesters.length !== 0 ? (
      semesters
        .map((semester) => (
          <HomeContentItem semester={semester} key={semester.id} />
        ))
        .reverse()
    ) : (
      <p> No semesters yet</p>
    );

  const [addSemester, setAddSemester] = useState(false);
  const [semesterInput, setSemesterInput] = useState("");

  const showAddSemester = () => {
    setAddSemester(!addSemester);
  };

  const handleAddSumbit = (type) => {
    // "#modal_l".modal("show");
    console.log(document.getElementById("modal_l"));
    type && semesterStore.add_semester(semesterInput);

    showAddSemester();
  };

  const handleInput = (e) => {
    setSemesterInput({ ...semesterInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-lg-8">
      <div className="d-flex flex-column h-100 bg-light rounded-3 shadow-lg p-4">
        <div className="py-2 p-md-3">
          {/* <!-- Title + ADD NEW ITEM--> */}
          <div className="d-sm-flex align-items-center justify-content-between pb-2">
            <h1 className="h3 mb-3 text-center text-sm-start">Semesters</h1>
            <div className="d-flex align-items-center mb-3">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={showAddSemester}
              >
                ADD SEMESTER
              </button>
            </div>
          </div>
          {/* <!-- Accordion with orders--> */}
          {/* <!-- Basic accordion --> */}
          <div className="accordion" id="accordionExample">
            {/* <!-- Item --> */}
            {addSemester && (
              <HomeAddContentItem
                handleInput={handleInput}
                handleAddSumbit={handleAddSumbit}
              />
            )}
            {semesterList}
            <button
              type="button"
              class="btn btn-outline-secondary"
              // href="modal2"
              data-bs-toggle="modal"
              data-bs-target="#modal_l"
            >
              Vertically centered modal
            </button>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default observer(HomeContent);
