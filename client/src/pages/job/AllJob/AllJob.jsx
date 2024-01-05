import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../../../components/mainPage/Header";
import JobList from "../../../components/joblist/JobList";
import JobSearch from "../../../components/jobSearch/JobSearch";
import { jobSearchContext } from "../../../context/JobSearchProvider";

export default function Alljob(props) {
  const [jobs, setJobs] = useState([]);
  const { jobData } = useContext(jobSearchContext);

  // const filteredPosts = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3001/Filterjobs", {
  //       skills: jobData,
  //       position: jobData,
  //     });
  //     console.log("this is from all job iflter.", response);
  //     setJobs(response.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   if (jobData?.length === 0) {
  //     filteredPosts();
  //     return;
  //   }
  //   fetchPosts();
  // }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchAllPost");
      // console.log("API Response:", response.data);
      setJobs(response.data);
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
      <JobSearch />
      {jobs.length !== 0 && <JobList jobs={jobs} />}
    </div>
  );
}
