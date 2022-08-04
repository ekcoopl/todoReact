import React from "react";
import style from "./Header.module.css";

const Header = (tasks) => {
  const addTask = () => {
    tasks.push();
  };
  return (
    <div className={style.header}>
      <input
        className={style.inputTask}
        type="text"
        placeholder="Введите свою задачу"
      />
      <button className={style.btn} onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Header;
