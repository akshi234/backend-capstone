// import React from 'react'
import styles from "./jobsearch.module.css";
// import search from "../../assets/search.png";
import cross from "../../assets/cross.png";

export default function JobSearch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        {/* <img src={search} className={styles.search} /> */}
        <input
          type="text"
          placeholder="Type any job title"
          className={styles.typeInput}
        />
      </div>
      <br />
      <br />
      <br />
      <select name="skills" className={styles.jobSkill}>
        <option value="skills">Skills</option>
        <option value="skills">HTML</option>
        <option value="skills">CSS3</option>
        <option value="skills">SCSS</option>
        <option value="skills">JavaScript</option>
        <option value="skills">Frontend</option>
        <option value="skills">React</option>
        <option value="skills">Node.js</option>
        <option value="skills">Express.js</option>
        <option value="skills">MongoDB</option>
      </select>

      <div className={styles.frontend}>
        Frontend
        <span>
          <img src={cross} className={styles.cross} />
        </span>
      </div>

      <div className={styles.clearr}>
        <p className={styles.clear}>clear</p>
      </div>
    </div>
  );
}
