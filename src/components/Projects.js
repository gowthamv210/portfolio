import styles from "./Projects.module.css";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div id="projects" className={styles.projects_box}>
      <div className={styles.headerBox}>
        <h3>
          Projects<span style={{ color: "#88ce52" }}>.</span>
        </h3>
        <div className={styles.headerLine}></div>
      </div>
      <div className={styles.projects_info}>
        <h4>My Recent Projects</h4>
        <ProjectList />
      </div>
    </div>
  );
}
