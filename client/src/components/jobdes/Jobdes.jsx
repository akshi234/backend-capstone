import styles from "./jobdes.module.css";
// import React from "react";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import middle from "../../assets/middle.png";
import calender from "../../assets/calender.png";
import stippend from "../../assets/stippend (1).png";
export default function Jobdes() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <img src={top} className={styles.topImg} />
          <img src={bottom} className={styles.bottomImg} />
          <img src={middle} className={styles.middleImg} />
        </div>
        <div className={styles.header}>
          <div className={styles.jobFinder}>Jobfinder</div>
          <div className={styles.logReg}>
            <div className={styles.login}>Login</div>
            <div className={styles.register}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.jobdeshead}>
        WordPress Development work from home job/internship at Adyaka Infosec
        Private Limited
      </div>
      <div className={styles.jobdescontent}>
        <div className={styles.agofull}>
          <div>1w ago </div>
          <div>.</div>
          <div> Full Time</div>
        </div>
        <h1 className={styles.wordpress}>WordPress Developement</h1>
        <p className={styles.mainloc}>Banglore | India</p>
        <div className={styles.stipendduration}>
          <div className={styles.stipend}>
            <img src={stippend} className={styles.stipendImg} />
            <p>Stipend</p>
          </div>
          <div className={styles.duration}>
            <img src={calender} className={styles.durationImg} />
            <p>Duration</p>
          </div>
        </div>
        <div className={styles.months}>
          <div>Rs 25000/month</div>
          <div>6 Months</div>
        </div>
        <div className={styles.abouthead}>
          <p className={styles.aboutcomp}>About Company</p>
          <p className={styles.compcont}>
            We provide technology-based services to help businesses and
            organizations achieve their goals. We offer a wide range of
            services, including software development, system integration,
            network and security services, cloud computing, and data analytics.
            Our primary focus is on leveraging technology to streamline business
            processes, improve productivity, and enhance overall efficiency.
          </p>
          <p className={styles.aboutcomp}>About the job/internship</p>
          <p className={styles.compcont}>
            We are looking for a responsible PHP/WordPress/Laravel/Shopify
            Developer. He/She will be liable for managing services and therefore
            the interchange of knowledge between the server and the users. The
            candidates primary focus is going to be the event of all server-side
            logic, definition, and maintenance of the central database and
            ensuring high performance and responsiveness to requests from the
            front end. Selected interns day-to-day responsibilities include: 1.
            Work on the development of theme customization, liquid programming
            language, and corresponding apps 2. Implement system integrations
            that are crucial to our success 3. Contribute to the development of
            HTML5/CSS/JavaScript and standard web technologies integral to
            building seamless multi-channel experiences 4. Work on speed
            optimization and making a mobile-friendly website
          </p>
          <p className={styles.aboutcomp}>Skill(s) required</p>
          <div className={styles.aboutskill}>
            <div className={styles.skillcont}>HTML</div>
            <div className={styles.skillcont}>CSS</div>
            <div className={styles.skillcont}>Wordpress</div>
          </div>
          <p className={styles.aboutcomp}>Additional Information</p>
          <p className={styles.compcont}>
            Stipend structure: This is a performance-based internship. In
            addition to the minimum-assured stipend, you will also be paid a
            performance-linked incentive (₹ 2500 per design).
          </p>
        </div>
      </div>
    </>
  );
}
