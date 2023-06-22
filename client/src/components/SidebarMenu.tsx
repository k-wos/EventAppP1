import React from "react";
import styles from "../styles/sidebar.module.css";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <p className={styles.link}>Strona głóna</p>
      <p className={styles.link}>Zakładka 1</p>
      <p className={styles.link}>Zakładka 2</p>
      <p className={styles.link}>Zakładka 3</p>
      <p className={styles.link}>Zakładka 4</p>
      <p
        className={styles.back}
        onClick={() => {
          navigate("/events");
        }}
      >
        Wróć
      </p>
    </div>
  );
};

export default SidebarMenu;
