import React from "react";
import modalStore from "../../Store/modalStore";

const Modal = () => {
  return (
    // <!-- Modal markup -->
    <div class="modal fade " tabindex="-1" role="dialog" id="modal_l">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{modalStore.title}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="fs-sm">{modalStore.desc}</p>
          </div>
          <div class="modal-footer">
            {modalStore.showSecondButton && (
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                {modalStore.secondButton}
              </button>
            )}

            {modalStore.showFirstButton && (
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                {modalStore.firstButton}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
