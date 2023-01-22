import {
  ToDoList,
  AddToDo,
  SearchTodo,
  ToDoFooter,
  Header,
} from "./components/index";
import React, { useState } from "react";
import "./App.css";
import { Todo } from "./components/models/models";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hideDone, setHideDone] = useState<boolean>(false);
  const handleAddTodo = (todo: string) => {
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
  };
  const filteredTodos = todos
    .filter((todo) => todo.todo.includes(searchQuery))
    .filter((todo) => !(hideDone && todo.isDone));

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.isDone };
        }
        return todo;
      })
    );
  };
  const handleSearchTodo = (query: string) => {
    setSearchQuery(query);
  };
  const handleToggleHideDone = () => {
    setHideDone(!hideDone);
  };
  const handleDeleteTodo = (idToDelete: number) =>
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== idToDelete)
    );

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <AddToDo onAddTodo={handleAddTodo} />
        <SearchTodo onSearchTodo={handleSearchTodo} />
        <button onClick={handleToggleHideDone} className="ToggleHideDonebtn">
          {hideDone ? "Show" : "Hide"} Done
        </button>
        <ToDoList
          onDelete={handleDeleteTodo}
          todos={filteredTodos}
          onToggleTodo={handleToggleTodo}
        />

        <ToDoFooter todos={filteredTodos} />
      </main>
    </div>
  );
};

export default App;
