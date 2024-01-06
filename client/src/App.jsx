import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import JobPage from "./pages/job/jobPage/JobPage";
import Jobdes from "./pages/job/jobdes/Jobdes";
import Alljob from "./pages/job/AllJob/AllJob";
import JobSearchProvider from "./context/JobSearchProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <JobSearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobPage" element={<JobPage />} />
            <Route path="/" element={<Alljob />} />
            <Route path="/fetchPost/:id" element={<Jobdes />} />
          </Routes>
        </BrowserRouter>
      </JobSearchProvider>
      <ToastContainer />
    </>
  );
}

export default App;
