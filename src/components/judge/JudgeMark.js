import React, { useState } from "react";
import evaluationStore from "../../Store/evaluationStore";

const JudgeMark = ({ judge, project, semester }) => {
  const [judgeMark, setJudgeMark] = useState(judge);

  const judgeMarking = { ...judgeMark };
  const teamList = judgeMarking.grade.map((team) => {
    return (
      <div className="accordion-item" key={team.team_id}>
        <h2 className="accordion-header" id={team.team_id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#h" + team.team_id}
            aria-expanded="false"
            aria-controls={"h" + team.team_id}
          >
            {team.team_name}
          </button>
        </h2>
        <div
          className="accordion-collapse collapse "
          id={"h" + team.team_id}
          aria-labelledby={team.team_id}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {team.grade.map((criteria) => {
              return (
                <div
                  key={team.team_id + "o" + criteria.criteria_id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "5fr 1fr 15fr 1fr 1fr",
                    justifySelf: "center",
                    alignSelf: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h5
                    style={{
                      margin: "auto",
                    }}
                  >
                    {criteria.criteria_name}
                  </h5>
                  <p
                    style={{
                      margin: "auto",
                    }}
                  >
                    0
                  </p>
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="0.5"
                    id="customRange3"
                    style={{ alignSelf: "center" }}
                    value={criteria.grade}
                    onChange={(e) => {
                      criteria.grade = +e.target.value;
                      setJudgeMark({ ...judgeMarking });
                    }}
                  />

                  <p
                    style={{
                      margin: "auto",
                    }}
                  >
                    10
                  </p>

                  <p
                    style={{
                      margin: "auto",
                      color: "green",
                    }}
                  >
                    {criteria.grade === 0 ? "" : criteria.grade}
                  </p>
                  <hr />
                </div>
              );
            })}
            <h4 style={{ textAlign: "center" }}>Notes:</h4>
            <div className="input-group mb-3">
              <textarea
                className="form-control"
                placeholder="Type your notes here..."
                rows="6"
                value={team.note}
                onChange={(e) => {
                  team.note = e.target.value;
                  setJudgeMark({ ...judgeMarking });
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      className="container d-flex justify-content-center align-items-center pt-7 pb-4"
      style={{ flex: "1 0 auto", flexDirection: "column" }}
    >
      {/* <h1 className="h3 mb-3 text-center text-sm-start">{project.name}</h1> */}
      <h1>{project.name}</h1>
      <p>{semester.name}</p>
      <h6>Hello {judge.name},</h6>
      <p style={{ width: "50%", textAlign: "center" }}>
        Please watch the presentations of the following teams carefully, and
        jugde them according to the criteria below.
      </p>

      {/* start */}
      <div className="col-lg-8">
        <div className="d-flex flex-column h-100 bg-light rounded-3 shadow-lg p-4">
          <div className="py-2 p-md-3">
            {/* <!-- Title + ADD NEW ITEM--> */}

            <div className="d-sm-flex align-items-center justify-content-between pb-2">
              <h1 className="h3 mb-3 text-center text-sm-start">Teams</h1>
              <div className="d-flex align-items-center mb-3"></div>
            </div>
            {/* <!-- Accordion with orders--> */}
            {/* <!-- Basic accordion --> */}
            <div className="accordion" id="accordionExample">
              {/* <!-- Item --> */}
              {teamList}
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      <button onClick={() => evaluationStore.updateJudge(judgeMark)}>
        submit
      </button>
      {/* end */}
    </section>
  );
};

export default JudgeMark;
