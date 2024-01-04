import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import JobPage from "./pages/jobPage/JobPage";
import Jobdes from "./components/jobdes/Jobdes";
import Alljob from "./pages/AllJob/AllJob";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobPage" element={<JobPage />} />
          <Route path="/header" element={<Alljob />} />
          <Route path="/jobdes" element={<Jobdes />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
