import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go in early morning",
      completed: false,
    },
    {
      title: "Learn english",
      description: "Learn in early morning",
      completed: false,
    },
    {
      title: "Learn english",
      description: "Learn in early morning",
      completed: false,
    },
    {
      title: "Learn english",
      description: "Learn in early morning",
      completed: false,
    },
  ]);

  function handleTodo() {
    setTodos([
      ...todos,
      {
        title: "new one",
        description: "new description is added",
      },
    ]);
  }
  return (
    <div>
      <button onClick={handleTodo}>Add todo</button>
      {todos.map(function (todo) {
        return <TodosHelp title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function TodosHelp(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

export default App;
