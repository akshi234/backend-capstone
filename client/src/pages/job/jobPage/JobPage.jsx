import styles from "./jobPage.module.css";
import color from "../../../assets/color.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JobPage() {
  const [companyName, setCompanyName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setdescription] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();

  const handleCancleBtn = () => {
    navigate("/");
  };

  const AddJob = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);

      const response = await axios.post(
        "http://localhost:3001/JobPosts",
        {
          companyName,
          logoURL,
          position,
          salary,
          jobType,
          workType,
          location,
          description,
          about,
          skills,
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      if (response) {
        localStorage.setItem("token", response.data.token);
        toast.success("Job added succesfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={styles.leftRight}>
      <div className={styles.left}>
        <p className={styles.lines}>Add job description</p>

        <form className={styles.forms} onSubmit={AddJob}>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className={styles.compName}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="logoUrl"> Add logo URL</label>
            <input
              type="text"
              name="logoUrl"
              placeholder="Logo URL"
              className={styles.logo}
              value={logoURL}
              onChange={(e) => setLogoURL(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobPosition">Job Position</label>
            <input
              type="text"
              name="jobPosition"
              placeholder="Job Position"
              className={styles.jobpos}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input
              type="number"
              name="monthlySalary"
              placeholder="Monthly Salary"
              className={styles.monthsal}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="jobType">Job Type</label>
            <select
              name="jobType"
              className={styles.jobtype}
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="Job Type">Job Type</option>
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          <div>
            <label htmlFor="workLocation">Remote/Office</label>
            <select
              name="workLocation"
              className={styles.workLocation}
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option value="Work Type">Work Type</option>
              <option value="remote">Remote</option>
              <option value="office">Office</option>
            </select>
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              placeholder=" Enter location"
              className={styles.loc}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="jobDescription" className={styles.joblabel}>
              Job Description
            </label>
            <textarea
              className={styles.jobdes}
              name="jobDescription"
              placeholder=" Type the job description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="aboutCompany" className={styles.aboutlabel}>
              About Company
            </label>
            <textarea
              name="aboutCompany"
              placeholder=" Type about your company"
              className={styles.aboutcomp}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="skillsRequired">Skills Required</label>
            <input
              type="text"
              name="skillsRequired"
              placeholder="Enter the must have skills"
              className={styles.skills}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className={styles.btns}>
            <button className={styles.canbtn} onClick={handleCancleBtn}>
              Cancel
            </button>
            <button className={styles.addbtn}>+Add Job</button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.finder}>Recruiter add job details here</p>
        <img src={color} className={styles.img} />
      </div>
    </div>
  );
}
