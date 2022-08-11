import React, { useContext, useState } from "react";
import Context from "./Context";
import ReactDOM from "react-dom";

const Modal = function ({ isShowing, hide }) {
  const [todoDescription, setTodoDescrition] = useState("");
  const { funcs } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    funcs.addTodo(todoDescription);
    setTodoDescrition("");
    hide();
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modalPanel-overlay" />
          <div
            className="modalPanel-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modalPanel">
              <div className="modalPanel-header">
                <div>Add new task</div>
                <button
                  type="button"
                  className="modalPanel-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <textarea
                  rows={20}
                  placeholder="New task description"
                  value={todoDescription}
                  onChange={(e) => setTodoDescrition(e.target.value)}
                ></textarea>
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
