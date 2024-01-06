import { useContext, useEffect, useState } from "react";
import styles from "./jobsearch.module.css";
import search from "../../assets/search.png";
import cross from "../../assets/cross.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jobSearchContext } from "../../context/JobSearchProvider";

export default function JobSearch({
  jobTitle,
  setJobTitle,
  selectedSkills,
  setSelectedSkills,
}) {
  const [selectedList, setSelectedList] = useState([]);
  const [searchItem, setSearchedItem] = useState("");
  const navigate = useNavigate();
  const { setJobData } = useContext(jobSearchContext);

  useEffect(() => {
    setJobData(selectedList);
  }, [selectedList]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(jobTitle, selectedSkills);
    }
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
    console.log(jobTitle);
  };

  const handleSkillChange = (e) => {
    const selectedSkill = e.target.value;
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  const handleRemoveSkill = (removedSkill) => {
    const updatedSkills = selectedSkills.filter(
      (skill) => skill !== removedSkill
    );
    setSelectedSkills(updatedSkills);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <img src={search} className={styles.search} />
        <input
          type="text"
          placeholder="Type any job title"
          value={jobTitle}
          onKeyDown={handleKeyDown}
          onChange={handleJobTitleChange}
          className={styles.typeInput}
        />
      </div>
      <br />
      <br />
      <br />
      <select
        name="skills"
        className={styles.jobSkill}
        onChange={handleSkillChange}
      >
        <option value="">Skills</option>
        <option value="HTML">HTML</option>
        <option value="CSS3">CSS3</option>
        <option value="JavaScript">Javascript</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="Express.js">Express.js</option>
        <option value="Mongodb">Mongodb</option>
      </select>

      <div className={styles.selectedSkills}>
        {selectedSkills.map((skill) => (
          <div key={skill} className={styles.frontend}>
            {skill}
            <span onClick={() => handleRemoveSkill(skill)}>
              <img src={cross} className={styles.cross} alt="Remove" />
            </span>
          </div>
        ))}
      </div>

      <div
        className={styles.addJob}
        onClick={() => {
          navigate("/jobPage");
        }}
      >
        {" "}
        + Add Job
      </div>
    </div>
  );
}
