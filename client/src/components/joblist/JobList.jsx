// import React from 'react'
import styles from "./joblist.module.css";
import country from "../../assets/country.png";
import group from "../../assets/Group 3.png";
import money from "../../assets/money.png";
import company from "../../assets/logo.png";

export default function JobList() {
  return (
    <div className={styles.jobleftright}>
      <div className={styles.jobleft}>
        <div className={styles.company}>
          <img src={company} alt="img" />
        </div>
        <div className={styles.jobContent}>
          <div className={styles.job}>Frontend Developer</div>
          <div className={styles.jobInfo}>
            <div className={styles.info}>
              <img src={group} className={styles.groupImg} />
              <span className={styles.color}>11-50</span>
            </div>
            <div className={styles.info}>
              <img src={money} className={styles.moneyImg} />
              <span className={styles.color}>50000</span>
            </div>
            <div className={styles.info}>
              <img src={country} className={styles.countryImg} />
              <span className={styles.color}>Delhi</span>
            </div>
          </div>
          <div className={styles.jobtype}>
            <div>Office</div>
            <div>full time</div>
          </div>
        </div>
      </div>
      <div className={styles.jobright}>
        <div className={styles.jobskills}>
          <div className={styles.skill}>Frontend</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>react Js</div>
        </div>
        <div className={styles.handle}>
          <div className={styles.viewdetails}>View Details</div>
        </div>
      </div>
    </div>
  );
}
