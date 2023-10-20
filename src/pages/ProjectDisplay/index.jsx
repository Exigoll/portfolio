import { useParams } from "react-router-dom";
import { GitHub, Public } from "@mui/icons-material";

import ProjectList from "../../helpers/ProjectsList";

import styles from "./ProjectDisplay.module.scss";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className={styles.project}>
      <h1 className={styles.project__title}>{project.name}</h1>
      <img className={styles.project__img} src={project.image} alt="Project" />
      <ul className={styles.project__list}>
        <li className={styles.project__item}>
          <p className={styles.project__subtitle}>Link to GitHub:</p>
          <a
            className={styles.project__link}
            href={project.linkDev}
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            className={styles.project__link}
            href={project.linkDevBackend}
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li className={styles.project__item}>
          <p className={styles.project__subtitle}>Link to deploy:</p>
          <a
            className={styles.project__link}
            href={project.linkDeploy}
            target="_blank"
            rel="noreferrer"
          >
            <Public />
          </a>
        </li>
        <p className={styles.project__subtitle}>
          Type: <span>{project.type}</span>
        </p>
        <p className={styles.project__subtitle}>
          Stack: <span>{project.stack}</span>
        </p>
      </ul>
    </div>
  );
}

export default ProjectDisplay;
