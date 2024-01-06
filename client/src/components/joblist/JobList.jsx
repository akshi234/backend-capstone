// import React from 'react'
import styles from "./joblist.module.css";
import country from "../../assets/country.png";
import group from "../../assets/Group 3.png";
import money from "../../assets/money.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { jobSearchContext } from "../../context/JobSearchProvider";
// import company from "../../assets/logo.png";

const JobList = () => {
  // console.log("this is from jobList", props);
  // const { jobs } = props;
  const { jobData: jobs } = useContext(jobSearchContext);
  const navigate = useNavigate();

  const handleViewPage = (id) => {
    navigate(`/fetchPost/${id}`);
  };
  console.log(jobs);

  return (
    <div className={styles.jobListContainer}>
      {jobs !== null &&
        jobs.map((job) => (
          <div key={job.id} className={styles.jobleftright}>
            <div className={styles.jobleft}>
              <div className={styles.company}>
                <img src={job.logoURL} alt="img" className={styles.logoo} />
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
                  <div>{job.workType}</div>
                  <div>{job.jobType}</div>
                </div>
              </div>
            </div>
            <div className={styles.jobright}>
              <div className={styles.jobskills}>
                {job.skills.map((skill, index) => (
                  <div key={index} className={styles.skills}>
                    {skill}
                  </div>
                ))}
              </div>

              <div className={styles.handle}>
                <div
                  className={styles.viewdetails}
                  onClick={() => handleViewPage(job._id)}
                >
                  View Details
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobList;
