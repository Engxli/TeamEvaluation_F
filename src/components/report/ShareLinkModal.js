import { observer } from "mobx-react";
import React from "react";
import evaluationStore from "../../Store/evaluationStore";

const ShareLinkModal = () => {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="modal1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share project to be evaluated</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="ai-link"></i>
              </span>
              <input
                type="text"
                className="form-control"
                disabled
                value={evaluationStore.link}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(evaluationStore.link);
                }}
              >
                Copy link
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-dismiss="modal"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ShareLinkModal);
