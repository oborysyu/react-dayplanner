import { useContext } from "react";
import Context from "./Context";

const styles = {
  div: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  input: {
    marginRight: "1rem",
  },
};

export function TodoItem({ todo, index }) {
  const classes = [];
  const { funcs } = useContext(Context);

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <div style={styles.div} className={classes.join(" ")}>
      <input
        type="checkbox"
        checked={todo.completed}
        style={styles.input}
        onChange={() => {
          funcs.toggleTodo(todo.id);
        }}
      />
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.description}
      <button
        className="deleteTaskButton"
        // here we can add string "disabled={!todo.completed}" to remove only completed tasks.
        type="button"
        onClick={() => {
          funcs.removeTodo(todo.id);
        }}
       title="remove todo item"
      >
        -
      </button>
    </div>
  );
}
