import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/mainPage/Header";
import JobList from "../../../components/joblist/JobList";
import JobSearch from "../../../components/jobSearch/JobSearch";

export default function Alljob() {
  const [jobs, setJobs] = useState([]);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      localStorage.setItem("token", token);
      const postId = "659586bf401c1f0bb779c60d";

      const response = await axios.get("http://localhost:3001/fetchPost/:id", {
        headers: {
          token: token,
        },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleJobSearch = async (searchResults) => {
    setJobs(searchResults.data); // Assuming the structure of the response is { data: [...] }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <JobSearch setJobs={handleJobSearch} />
      <JobList jobs={jobs} />
    </div>
  );
}
