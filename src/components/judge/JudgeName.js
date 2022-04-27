import React, { useState } from "react";
import evaluationStore from "../../Store/evaluationStore";
import { useNavigate } from "react-router-dom";

const JudgeName = ({ evaluation, semester, project }) => {
  const navigate = useNavigate();
  const [judgeName, setJudgeName] = useState("");

  return (
    <section
      className="container d-flex justify-content-center align-items-center pt-7 pb-4"
      style={{ flex: "1 0 auto", flexDirection: "column" }}
    >
      <h1>{project.name}</h1>
      <h6>{semester.name}</h6>
      <form
        className="needs-validation"
        onSubmit={(e) => {
          e.preventDefault();
          evaluationStore.addJudge(
            {
              name: judgeName,
              evaluation: evaluation.id,
            },
            navigate
          );
        }}
        style={{
          width: "50%",
          border: "1px solid black",
          padding: "5%",
          borderRadius: "12px",
        }}
      >
        <div className="input-group mb-3">
          <i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
          <input
            name="username"
            className="form-control rounded"
            type="text"
            placeholder="Judge Name"
            required
            onChange={(e) => {
              setJudgeName(e.target.value);
            }}
          ></input>
        </div>

        <button className="btn btn-primary d-block w-100" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default JudgeName;
