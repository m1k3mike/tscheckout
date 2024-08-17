import axios from "axios";
import * as React from "react";
import { Itodo } from "./types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: React.FC = () => {
  const [todo, setTodo] = React.useState<Itodo[]>([]);
  fetchTodos();
  async function fetchTodos() {
    try {
      const response = await axios.get<Itodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={todo}
      renderItem={(todo: Itodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
