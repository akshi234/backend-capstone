import { useState, useEffect } from "react";
import styles from "./header.module.css";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import middle from "../../assets/middle.png";
import user from "../../assets/user.png";
import { isUserLoggedIn } from "../utils/util";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isLoggedIn) {
      const userFullName = "fullName";
      setUserName(userFullName);
    }
  }, [isLoggedIn]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserName("");
  };

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
              <div onClick={handleLogoutClick}>Logout</div>
              <div>hello! {userName}</div>
              <img src={user} className={styles.userImg} />
            </div>
          ) : (
            <div className={styles.logReg}>
              <div className={styles.login} onClick={handleLoginClick}>
                Login
              </div>
              <div className={styles.register} onClick={handleSignUpClick}>
                Register
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
