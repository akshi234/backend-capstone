// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import engineer from "../../assets/engineer.png";
import styles from "./login.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response?.data.jwttoken) {
        localStorage.setItem("token", response.data.jwttoken);
      }

      if (response?.data.status === "SUCCESS") {
        console.log(response);
        toast.success("Login Succesfully");
        navigate("/header");
      } else {
        toast.error("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className={styles.leftRight}>
      <div className={styles.left}>
        <div className={styles.lines}>
          <h1>Already have an account?</h1>
          <p className={styles.para}>Your personal job finder is here</p>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.reginput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.reginput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className={styles.regbtn}>
              Sign In
            </button>
            <p className={styles.acc}>
              Do not have an account?{" "}
              <Link to="/register">
                <span className={styles.sign}>Sign Up</span>
              </Link>
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
