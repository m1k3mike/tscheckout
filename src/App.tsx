import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import "./App.css";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Пользователи
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Задачи
          </NavLink>
        </nav>

        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
