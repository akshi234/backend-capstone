// import React from 'react'
import styles from "./joblist.module.css";
import country from "../../assets/country.png";
import group from "../../assets/Group 3.png";
import money from "../../assets/money.png";
import PropTypes from "prop-types";
// import company from "../../assets/logo.png";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className={styles.jobleftright}>
          <div className={styles.jobleft}>
            <div className={styles.company}>
              <img src={job.company} alt="img" />
            </div>
            <div className={styles.jobContent}>
              <div className={styles.job}>{job.position}</div>
              <div className={styles.jobInfo}>
                <div className={styles.info}>
                  <img src={group} className={styles.groupImg} />
                  <span className={styles.color}>11-50</span>
                </div>
                <div className={styles.info}>
                  <img src={money} className={styles.moneyImg} />
                  <span className={styles.color}>{job.salary}</span>
                </div>
                <div className={styles.info}>
                  <img src={country} className={styles.countryImg} />
                  <span className={styles.color}>{job.location}</span>
                </div>
              </div>
              <div className={styles.jobtype}>
                <div>{job.wrokType}</div>
                <div>{job.jobType}</div>
              </div>
            </div>
          </div>
          <div className={styles.jobright}>
            <div className={styles.jobskills}>
              <div className={styles.skill}>{job.skills}</div>
            </div>
            <div className={styles.handle}>
              <div className={styles.viewdetails}>View Details</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      companySize: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default JobList;
