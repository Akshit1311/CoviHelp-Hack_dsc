import React from "react";

//Styles
import "./Modal.css";

const Modal = ({ setIsLoginModal, children }) => {
  return (
    <div className="modal">
      <i className="fas fa-times" onClick={() => setIsLoginModal(false)}></i>
      {children}
    </div>
  );
};

export default Modal;
