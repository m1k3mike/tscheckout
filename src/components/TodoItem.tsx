import * as React from "react";
import { Itodo } from "./types/types";

interface TodoItemProps {
  todo: Itodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
