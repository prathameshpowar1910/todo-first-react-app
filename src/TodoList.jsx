/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function TodoList({ todos,deleteTodo,toggleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            /*id={todo.id} completed={todo.completed} title={todo.title} */ key={
              todo.id
            }
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
