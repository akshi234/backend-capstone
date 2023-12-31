import { useNavigate } from "react-router-dom";
import engineer from "../../assets/engineer.png";
import styles from "./register.module.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [userinfo, setUserInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    terms: false,
  });

  const newUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        userinfo
      );
      return response.data;
    } catch (e) {
      console.log("something went wrong", e);
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleLoginPageClick = () => {
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userinfo.terms) {
      await newUser();
    } else {
      toast.error("Please agree to the terms before creating an account");
    }
  };

  const handleCheckboxChange = () => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      terms: !prevUserInfo.terms,
    }));
  };

  return (
    <div className={styles.leftRight}>
      <div className={styles.left}>
        <div className={styles.lines}>
          <h1>Create an account</h1>
          <p className={styles.para}>Your personal job finder is here</p>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.reginput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.reginput}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              className={styles.reginput}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.reginput}
              onChange={handleInputChange}
            />
            <label className={styles.check}>
              <input
                type="checkbox"
                name="trems"
                className={styles.checkboxx}
                checked={userinfo.terms}
                onChange={handleCheckboxChange}
              />
              <span className={styles.txt}>
                By creating an account, I agree to our terms of use and privacy
                policy
              </span>
            </label>
            <button
              type="submit"
              className={styles.regbtn}
              onClick={handleLoginPageClick}
            >
              Create Account
            </button>
            <p className={styles.acc}>
              Already have an account?{" "}
              <span className={styles.sign}>Sign In</span>
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
