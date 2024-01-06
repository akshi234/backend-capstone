import { createContext, useState } from "react";

export const jobSearchContext = createContext();

function JobSearchProvider({ children }) {
  const [jobData, setJobData] = useState(null);

  return (
    <jobSearchContext.Provider value={{ jobData, setJobData }}>
      {children}
    </jobSearchContext.Provider>
  );
}

export default JobSearchProvider;
