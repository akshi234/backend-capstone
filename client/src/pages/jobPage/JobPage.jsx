// import React from "react";
import styles from "./jobPage.module.css";
import color from "../../assets/color.png";

export default function JobPage() {
  return (
    <div className={styles.leftRight}>
      <div className={styles.left}>
        <p className={styles.lines}>Add job description</p>

        <form className={styles.forms}>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className={styles.compName}
            />
          </div>
          <div>
            <label htmlFor="logoUrl"> Add logo URL</label>
            <input
              type="text"
              name="logoUrl"
              placeholder="Logo URL"
              className={styles.logo}
            />
          </div>

          <div>
            <label htmlFor="jobPosition">Job Position</label>
            <input
              type="text"
              name="jobPosition"
              placeholder="Job Position"
              className={styles.jobpos}
            />
          </div>
          <div>
            <label htmlFor="monthlySalary">Monthly Salary</label>
            <input
              type="number"
              name="monthlySalary"
              placeholder="Monthly Salary"
              className={styles.monthsal}
            />
          </div>
          <div>
            <label htmlFor="jobType">Job Type</label>
            <select name="jobType" className={styles.jobtype}>
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          <div>
            <label htmlFor="workLocation">Remote/Office</label>
            <select name="workLocation" className={styles.workLocation}>
              <option value="remote">Remote</option>
              <option value="office">Select</option>
            </select>
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              placeholder=" Enter location"
              className={styles.loc}
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
            ></textarea>
          </div>

          <div>
            <label htmlFor="skillsRequired">Skills Required</label>
            <input
              type="text"
              name="skillsRequired"
              placeholder="Enter the must have skills"
              className={styles.skills}
            />
          </div>

          <div>
            <label htmlFor="additionalInformation">Information</label>
            <input
              type="text"
              name="skillsRequired"
              placeholder="Enter the additional information"
              className={styles.information}
            />
          </div>
          <div className={styles.btns}>
            <button className={styles.canbtn}>Cancel</button>
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
