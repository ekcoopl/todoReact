import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./components/Main.module.css";

function App() {
  const tasks = [
    { id: Math.random(), title: "one", isComplete: false },
    { id: Math.random(), title: "two", isComplete: true },
    { id: Math.random(), title: "three", isComplete: false },
  ];
  const [todos, setTodos] = useState(tasks);

  return (
    <div className="App">
      <Header tasks={tasks} />
      {tasks.map((task) => (
        <div className={styles.inputTask} key={task.id}>
          {task.title}
        </div>
      ))}
      <Main key={tasks} tasks={tasks} />
    </div>
  );
}

export default App;
