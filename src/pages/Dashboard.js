import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../components/Context";
import Modal from "../components/Modal";
import { TodoList } from "../components/TodoList";
import useModal from "../components/useModal";

const Dashboard = () => {
  const { signOut, currentUser } = useContext(Context);
  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();

  function onSignOut(user) {
    signOut(user);
    navigate("/");
  }

  function showModalPanel() {
    toggle();
  }

  if (!currentUser) {
    return (
      <div>
        <p>Please log in!</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="leftPanel">
          <div className="avatarCircle">
            {currentUser.username.charAt(0).toUpperCase()}
          </div>
          <p>{currentUser.username}</p>
          <button onClick={() => onSignOut(currentUser)}>Sign out</button>
        </div>
        <div className="mainPanel">
          <p>My tasks</p>
          <hr />
          {currentUser.todos.length ? (
            <TodoList todos={currentUser.todos} />
          ) : (
            <p>No tasks to do!</p>
          )}
          <button className="addNewTaskButton" onClick={showModalPanel}>
            Add new task...
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
      </div>
    );
  }
};
export default Dashboard;
