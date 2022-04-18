import React from "react";

const HomeAddContentItem = ({ handleAddSumbit, handleInput }) => {
  return (
    <div className="accordion-item" style={{ border: "2px solid" }}>
      <h2 className="accordion-header">
        <div
          style={{
            position: "relative",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <form onSubmit={() => handleAddSumbit(true)}>
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Enter semester name"
              onChange={handleInput}
              style={{
                marginLeft: "10px",
                width: "75%",
                border: "0px",
              }}
            ></input>

            <div style={{ position: "absolute", right: "10px", top: "1px" }}>
              <button
                className="btn btn-translucent-success"
                style={{ marginRight: "10px", padding: "5px" }}
                onClick={() => handleAddSumbit(true)}
                type="submit"
              >
                SAVE
              </button>
              <button
                className="btn btn-translucent-danger"
                style={{ padding: "5px" }}
                onClick={() => handleAddSumbit(false)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </h2>
      <div
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      ></div>
    </div>
  );
};

export default HomeAddContentItem;
