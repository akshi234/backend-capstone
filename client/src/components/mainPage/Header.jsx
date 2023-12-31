import { useState } from "react";
import styles from "./header.module.css";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import middle from "../../assets/middle.png";
import user from "../../assets/user.png";
import JobSearch from "../jobSearch/JobSearch";
import JobList from "../joblist/JobList";
import { isUserLoggedIn } from "../utils/util";
export default function Header() {
  const [isLoggedIn] = useState(isUserLoggedIn());

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
          {isLoggedIn ? (
            <div className={styles.userProfile}>
              <div>Logout</div>
              <div>hello! Recruiter</div>
              <img src={user} className={styles.userImg} />
            </div>
          ) : (
            <div className={styles.logReg}>
              <div className={styles.login}>Login</div>
              <div className={styles.register}>Register</div>
            </div>
          )}
        </div>
      </div>
      <JobSearch />
      <br />
      <JobList />
    </>
  );
}
