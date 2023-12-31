// import { useState } from "react";
import engineer from "../../assets/engineer.png";
import styles from "./login.module.css";
// import axios from "axios";
// import { toast } from "react-toastify";

export default function Login() {
  // const [userinfo, setUserInfo] = useState({
  //   email: "",
  //   password: "",
  // });

  // const fetchUser = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/auth/signup",
  //       userinfo
  //     );
  //     return response.data;
  //   } catch (e) {
  //     console.log("something went wrong", e);
  //     toast.error("Registration failed. Please try again.");
  //   }
  // };

  return (
    <div className={styles.leftRight}>
      <div className={styles.left}>
        <div className={styles.lines}>
          <h1>Already have an account?</h1>
          <p className={styles.para}>Your personal job finder is here</p>
        </div>
        <div className={styles.form}>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.reginput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.reginput}
            />

            <button type="submit" className={styles.regbtn}>
              Sign In
            </button>
            <p className={styles.acc}>
              Already have an account?{" "}
              <span className={styles.sign}>Sign Up</span>
            </p>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.finder}>Your Personal Job Finder</p>
        <img src={engineer} className={styles.img} />
      </div>
    </div>
  );
}
