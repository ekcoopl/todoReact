import React from "react";
import styles from "./Main.module.css";

const Main = (tasks) => {
  return (
    <div className={styles.main}>
      <div>
        {tasks.length > 0
          ? tasks.map((task) => (
              <div className={styles.inputTask} key={task.id}>
                {task.title}
              </div>
            ))
          : null}
      </div>
      <div>
        <input type="text" className={styles.inputTask} />
      </div>
    </div>
  );
};

export default Main;
