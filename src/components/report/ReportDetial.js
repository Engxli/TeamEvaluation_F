import { observer } from "mobx-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import evaluationStore from "../../Store/evaluationStore";

const ReportDetial = ({ project, teamId, semester }) => {
  const teamList = project.team ? (
    project.team.map((team) => {
      return (
        <li key={team.id} className="nav-item">
          <NavLink
            className="nav-link "
            to={"/report/" + semester.id + "/" + project.id + "/" + team.id}
          >
            {team.name}
          </NavLink>
        </li>
      );
    })
  ) : (
    <p>No teams yet!</p>
  );

  const evaluation = project.evaluation ? project.evaluation : "";

  const data = evaluation
    ? evaluation.avg.judge !== 0
      ? evaluation.avg[teamId ? teamId : "0"]
      : ""
    : "";

  const tableContent = data ? (
    data.criteria.map((criteria, index) => {
      return (
        <tr key={criteria.criteria_id}>
          <th scope="row">{index + 1}</th>
          <td>{criteria.criteria_name}</td>
          <td>{criteria.avg} %</td>
          <td>{criteria.criteria_weight}</td>
          <td>{criteria.avg_weight}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <th scope="row">0</th>
      <td>NOT</td>
      <td>MARKED</td>
      <td>Yet</td>
      <td>!</td>
    </tr>
  );

  const [show, setShow] = useState("none");

  const handleShow = (type) => {
    if (show !== "lock") show === type ? setShow("none") : setShow(type);
  };

  return (
    <section className="overflow-hidden" id="portfolio">
      <div className="container py-lg-7 py-md-6 py-5 my-2 my-md-0">
        <h2 className="mb-3 text-center">{project.name}</h2>
        <div
          style={{
            position: "absolute",
            width: "fit-context",
            right: "100px",
          }}
        >
          {["none", "share"].includes(show) ? (
            <>
              <button
                type="button"
                className="btn btn-outline-secondary btn-icon"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  handleShow("share");
                  evaluationStore.getLink(project);
                  navigator.clipboard.writeText(evaluation.id);
                }}
                data-bs-toggle="modal"
                data-bs-target="#modal1"
              >
                Share <i className="ai-share-2"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-icon"
                onClick={() => handleShow("lock")}
              >
                Lock <i className="ai-unlock"></i>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-outline-danger btn-icon"
              onClick={() => handleShow("lock")}
            >
              Locked <i className="ai-lock"></i>
            </button>
          )}
        </div>
        <p className="mb-4 pb-md-2 text-muted text-center">
          This project has been graded by{" "}
          {evaluation ? evaluation.avg.judge : 0} Judges
        </p>
        <div
          className="masonry-filterable"
          style={{ width: "75%", margin: "auto" }}
        >
          {/* <!-- Portfolio nav (Filters)--> */}
          <nav
            className="pb-3 mb-4"
            data-simplebar
            data-simplebar-auto-hide="false"
          >
            <ul
              className="
                    masonry-filters
                    nav nav-tabs
                    justify-content-sm-center
                    flex-warp
                    text-nowrap
                    mb-0
                  "
            >
              <li className="nav-item">
                <NavLink
                  className={"nav-link" + (!teamId ? " active" : "")}
                  to={"/report/" + semester.id + "/" + project.id + "/"}
                >
                  All
                </NavLink>
              </li>
              {teamList}
            </ul>
            <hr />
          </nav>
          {/* <!-- Portfolio grid--> */}
          {/* TABLE START */}

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Criteria</th>
                  <th>Avg. Score</th>
                  <th>Weight</th>
                  <th>Weighted Avg.</th>
                </tr>
              </thead>
              <tbody>{tableContent}</tbody>
            </table>
          </div>

          {/* TABLE END */}
          <h6 style={{ textAlign: "right" }}>Total: {data.total} %</h6>
        </div>
      </div>
    </section>
  );
};

export default observer(ReportDetial);
