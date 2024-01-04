import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/mainPage/Header";
import JobList from "../../components/joblist/JobList";
import JobSearch from "../../components/jobSearch/JobSearch";

export default function Alljob() {
  const [jobs, setJobs] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchPost/:id");
      setJobs(response.data);
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
      <JobList jobs={jobs} />
    </div>
  );
}
