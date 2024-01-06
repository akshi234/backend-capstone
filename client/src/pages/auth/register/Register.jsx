import { Link, useNavigate } from "react-router-dom";
import engineer from "../../../assets/engineer.png";
import styles from "./register.module.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!checkboxChecked) {
      toast.warn("Please agree to the terms before creating an account");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        fullname,
        email,
        mobile,
        password,
      });

      if (response?.data.jwttoken) {
        localStorage.setItem("token", response.data.jwttoken);
      }

      if (response?.data.status) {
        console.log(response);
        toast.success("Signup Successfully");
        navigate("/");
      } else {
        toast.error(response.data.status);
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
          <h1>Create an account</h1>
          <p className={styles.para}>Your personal job finder is here</p>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="fullname"
              placeholder="Name"
              value={fullname}
              className={styles.reginput}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              className={styles.reginput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={mobile}
              className={styles.reginput}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              className={styles.reginput}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className={styles.check}>
              <input
                type="checkbox"
                name="trems"
                className={styles.checkboxx}
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
              />
              <span className={styles.txt}>
                By creating an account, I agree to our terms of use and privacy
                policy
              </span>
            </label>
            <button type="submit" className={styles.regbtn}>
              Create Account
            </button>
            <p className={styles.acc}>
              Already have an account?{" "}
              <Link to="/login">
                <span className={styles.sign}>Sign In</span>
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
