import styles from "./jobdes.module.css";
import calender from "../../../assets/calender.png";
import stippend from "../../../assets/stippend (1).png";
import { useState, useEffect } from "react";
import Header from "../../../components/mainPage/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Jobdes(props) {
  const { id } = useParams();
  const d = useParams();
  // console.log(d);
  // console.log(id);
  // const navigate = useNavigate();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(id);
        if (id) {
          const response = await axios.get(
            `http://localhost:3001/fetchPost/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                token: token,
              },
            }
          );
          console.log("Response data:", response.data);
          setCompanyData(response.data);
        } else {
          console.error("Missing id prop.");
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {companyData && (
        <>
          <div className={styles.jobdeshead}>
            WordPress Development work from home job/internship at Adyaka
            Infosec Private Limited
          </div>
          <div className={styles.jobdescontent}>
            <div className={styles.agofull}>
              <div>1w ago </div>
              <div>.</div>
              <div> {companyData.jobType}</div>
            </div>
            <h1 className={styles.wordpress}>{companyData.position}</h1>
            <p className={styles.mainloc}>{companyData.location}</p>
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
              <div>Rs {companyData?.salary}/month</div>
              <div>6 Months</div>
            </div>
            <div className={styles.abouthead}>
              <p className={styles.aboutcomp}>About Company</p>
              <p className={styles.compcont}>{companyData.about}</p>
              <p className={styles.aboutcomp}>About the job/internship</p>
              <p className={styles.compcont}>{companyData.description}</p>
              <p className={styles.aboutcomp}>Skill(s) required</p>
              <div className={styles.aboutskill}>
                <div className={styles.skillcont}>{companyData.skills}</div>
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
      )}
    </>
  );
}
