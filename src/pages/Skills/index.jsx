import styles from "./Skills.module.scss";

function Skills() {
  return (
    <div className={styles.skills}>
      <h1 className={styles.skills__title}>My Skills</h1>
      <ul className={styles.listSkills}>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Front-End:</h2>
          <span>
            React, Redux / Redux Toolkit, Next.js, React Hook Form, MUI, Axios,
            SCSS, Tailwind, Styled-components, CSS Modules, HTML5
          </span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Back-End:</h2>
          <span>Nest.js</span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Others:</h2>
          <span>
            Webpack, Gulp, ESLint, Prettier, Husky, Figma, Photoshop, Firebase,
            Insomnia, PostgreSQL
          </span>
        </li>
        <li className={styles.listSkills__item}>
          <h2 className={styles.listSkills__title}>Languages:</h2>
          <span>JavaScript, TypeScript</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
