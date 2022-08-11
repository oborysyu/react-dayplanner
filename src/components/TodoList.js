import { TodoItem } from "./TodoItem";

export function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
          />
        );
      })}
    </ul>
  );
}
