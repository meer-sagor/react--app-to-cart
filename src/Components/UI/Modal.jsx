import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { cartShowContext } from "../../App";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const { hideCartHandler } = useContext(cartShowContext);
  return <div className={classes.backdrop} onClick={() => hideCartHandler()} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const PortalElement = document.querySelector("#overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, PortalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </>
  );
};

export default Modal;
