import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../../../components/mainPage/Header";
import JobList from "../../../components/joblist/JobList";
import JobSearch from "../../../components/jobSearch/JobSearch";
import { jobSearchContext } from "../../../context/JobSearchProvider";

export default function Alljob(props) {
  const [jobs, setJobs] = useState([]);
  const { jobData, setJobData } = useContext(jobSearchContext);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const filteredPosts = async () => {
    try {
      // console.log("this is job data : ", jobData);
      const response = await axios.post(
        "https://capstone-vl68.onrender.com/Filterjobs",
        {
          skills: selectedSkills,
          position: jobTitle,
        }
      );
      console.log(selectedSkills);
      console.log("this is from all job filter.", response);
      setJobData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    filteredPosts();
  }, [selectedSkills, jobTitle]);

  // useEffect(() => {
  //   if (jobData) {
  //     filteredPosts();
  //     return;
  //   }
  //   fetchPosts();
  // }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://capstone-vl68.onrender.com/fetchAllPost"
      );
      // console.log("API Response:", response.data);
      setJobData(response.data);
      // console.log(jobs);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <JobSearch
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
      {jobData && <JobList />}
    </div>
  );
}
