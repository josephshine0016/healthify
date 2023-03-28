import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LandingPage from './pages/LandingPage';
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import DoctorSignup from './pages/DoctorSignup';
import PatientSignup from './pages/PatientSignup';
import PatientDashboard from './pages/PatientDashboard';
import Readings from './pages/Readings';
import PatientVc from './pages/PatientVc';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorVc from './pages/DoctorVc';
import { getRealtimeData } from "./firebase";
import Preview from "./pages/Preview";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login-patient",
    element: <PatientLogin/>,
  },
  {
    path: "/login-doctor",
    element: <DoctorLogin/>,
  },
  {
    path: "/signup-doctor",
    element: <DoctorSignup/>,
  },
  {
    path: "/signup-patient",
    element: <PatientSignup/>,
  },
  {
    path: "/patient-dashboard",
    element: <PatientDashboard/>,
  },
  {
    path: "/patient-readings",
    element: <Readings/>,
  },
  {
    path: "/patient-vc",
    element: <PatientVc/>,
  },
  {
    path: "/doctor-dashboard",
    element: <DoctorDashboard/>,
  },
  {
    path: "/doctor-vc",
    element: <DoctorVc/>,
  },
  {
    path: "/pres-preview",
    element: <Preview/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
