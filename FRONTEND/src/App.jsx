// import utils
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Home/HomePage.jsx";
import TransportationPage from "./Home/TransportationPage.jsx";
import Admission from "./Home/Admission.jsx";
import TuitionPage from "./Home/TuitionPage.jsx";
import Form from "./Home/Form.jsx";

import RootLayout from "./Layout/RootLayout.jsx";
import ParentsDashboard from "./Home/ParentsDashboard.jsx";
import ParentsLayout from "./Layout/ParentsLayout.jsx";
import Grades from "./Home/Grades.jsx";
import Contact from "./Home/Contact.jsx";
import Security from "./Home/Security.jsx";

import TeacherLayout from "./Layout/TeacherLayout.jsx";
import TDashBoard from "./Home/TDashBoard.jsx";
import TAttendance from "./Home/TAttendance.jsx";
import TGrades from "./Home/TGrades.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="transport" element={<TransportationPage />} />
        <Route path="admission" element={<Admission />} />
        <Route path="tuition" element={<TuitionPage />} />
        <Route path="form" element={<Form />} />
      </Route>, 
      <Route path="/parents" element={<ParentsLayout />}>
        <Route index element={<ParentsDashboard />} />
        <Route path="grades" element={<Grades />} />
        <Route path="contact" element={<Contact />} />
        <Route path="security" element={<Security />} />
      </Route>,
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TDashBoard />} />
        <Route path="attendance" element={<TAttendance />} />
        <Route path="grades" element={<TGrades />} />
      </Route>
      </>
      
    ),
  );


  return <RouterProvider router={router} />;
};

export default App;
