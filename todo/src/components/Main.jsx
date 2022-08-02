import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div>
        <input type="text" className={styles.inputTask} />
      </div>
      <div>
        <input type="text" className={styles.inputTask} />
      </div>
    </div>
  );
};

export default Main;
