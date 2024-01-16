import React from "react";
import useModalStore from "../store/useModalStore";
const Modal = () => {
  const { isOpen, closeModal } = useModalStore();

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <div className="modal__overlay">
          <div className="modal">
            <div className="modal__header">
              <img
                src="/truefoundry__image.png"
                className="truefoundry__img"
                alt=""
              />
              <h2>Frontend Assessment</h2>
            </div>
            <div className="modal__content">
              <p>
                Welcome to our amazing app! This app is designed to convert UI
                schema to dynamic forms. This website is made for{" "}
                <span className="truefoundry"></span>
                assessment test.
              </p>

              <p className="modal__list__header">How to use this website</p>
              <ol className="modal__list">
                <li>Make sure you use formatted json</li>
                <li>Try to remove whitespaces also for better results</li>
                <li>
                  After pasting the UI schema please click on form side as it is
                  working on onBlur prop
                </li>
                <li>
                  Use{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jsonviewer.stack.hu/"
                  >
                    jsonviewer
                  </a>{" "}
                  to format the UI Schema first for best results
                </li>
              </ol>
              <button onClick={handleClose} className="modal__closeButton">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
