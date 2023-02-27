import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Adminpage from "./components/admin/adminpage";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
import Dashboard from "./components/admin/Dashboard";
import Addclients from "./components/admin/addclients";
import AllStudentData from "./components/admin/allStudentData";
import Hirings from "./components/admin/hirings";
import AcceptedRequest from "./components/admin/acceptedRequest";
import Createclients from "./components/admin/create-clients";
import AllTPO from "./components/company/alltpo";
import Algorithm from "./components/admin/Algorithm";
import Dashboardc from "./components/company/Dashboard";
import HRequest from "./components/company/hiringrequest";
import TPODashboard from "./components/admin/tpoDashboard";
import Companydashboard from "./components/company/companydashboard";
import Interview from "./components/company/interview";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/company" element={<Dashboardc />}>
            <Route path="companydashboard" element={<Companydashboard/>} />
              <Route path="alltpo" element={<AllTPO/>} />
              <Route path="hiringrequest" element={<HRequest/>} />
              <Route path="interview" element={<Interview/>} />
            </Route>
            <Route path="/admin" element={<Dashboard />}>
            <Route path="tpodashboard" element={<TPODashboard/>} />
            <Route path="algorithm" element={<Algorithm/>} />
              <Route path="adminpage" element={<Adminpage />} />
              <Route path="acceptedRequest" element={<AcceptedRequest />} />
              <Route path="addclients" element={<Addclients />}>
                <Route path="create-clients" element={<Createclients />} />
              </Route>
              <Route path="allStudentData" element={<AllStudentData />} />
              <Route path="hirings" element={<Hirings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
