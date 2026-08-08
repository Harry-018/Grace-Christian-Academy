// import utils
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";

import ProtectedRoutes from "./ProtectedRoutes.jsx";

// import home pages
import Login from "./Login.jsx";
import HomePage from "./Home/HomePage.jsx";
import TransportationPage from "./Home/TransportationPage.jsx";
import AdmissionPage from "./Home/AdmissionPage.jsx";
import TuitionPage from "./Home/TuitionPage.jsx";
import ApplicationFormPage from "./Home/ApplicationFormPage.jsx";
import NotFound from "./Components/NotFound.jsx";
import NotAuthorized from "./NotAuthorized.jsx";
import SuccessApplication from "./SuccessApplication.jsx";

//import admin pages
import Dashboard from "./Admin/DashboardPage.jsx";
import ApplicationsPage from "./Admin/ApplicationsPage.jsx";
import SubmissionsPage from "./Admin/SubmissionsPage.jsx";
import StudentsPage from "./Admin/StudentsPage.jsx";
import TeachersPage from "./Admin/TeachersPage.jsx";
import ClassesPage from "./Admin/ClassesPage.jsx";
import Home from "./Admin/WebManagementPages/Home.jsx";
import Tuitions from "./Admin/WebManagementPages/Tuitions.jsx";
import Transport from "./Admin/WebManagementPages/Transport.jsx";

// import layout
import RootLayout from "./Layout/HomeLayouts/RootLayout.jsx";
import TranspoLayout from "./Layout/HomeLayouts/TranspoLayout.jsx";
import AdmissionLayout from "./Layout/HomeLayouts/AdmissionLayout.jsx";
import TuitionLayout from "./Layout/HomeLayouts/TuitionLayout.jsx";
import AdminLayout from "./Layout/AdminLayouts/AdminLayout.jsx";
import ApplicationLayout from "./Layout/AdminLayouts/ApplicationLayout.jsx";
import SubmissionLayout from "./Layout/AdminLayouts/SubmissionLayout.jsx";
import StudentLayout from "./Layout/AdminLayouts/StudentLayout.jsx";
import TeacherLayout from "./Layout/AdminLayouts/TeacherLayout.jsx";
import WebManagementLayout from "./Layout/AdminLayouts/WebManagementLayout.jsx";
import ClassesLayout from "./Layout/AdminLayouts/ClassesLayout.jsx";

// import loaders
import { transpoLoader } from "./services/transpoLoader.js";
import { homeLoader } from "./services/homeLoader.js";
import { tuitionLoader } from "./services/tuitionLoader.js";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public pages  */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} loader={homeLoader} />
          <Route path="transport" element={<TranspoLayout />}>
            <Route
              index
              element={<TransportationPage />}
              loader={transpoLoader}
            />
          </Route>
          <Route path="admission" element={<AdmissionLayout />}>
            <Route index element={<AdmissionPage />} />
          </Route>
          <Route path="tuition" element={<TuitionLayout />}>
            <Route index element={<TuitionPage />} loader={tuitionLoader} />
          </Route>
          <Route path="enrollment" element={<ApplicationFormPage />} />
          <Route path="successapplication" element={<SuccessApplication />} />
        </Route>
        ,{/* admin pages */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes allowedRole="admin">
              <AdminLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="application" element={<ApplicationLayout />}>
            <Route index element={<ApplicationsPage />} />
          </Route>
          <Route path="submission" element={<SubmissionLayout />}>
            <Route index element={<SubmissionsPage />} />
          </Route>
          <Route path="student" element={<StudentLayout />}>
            <Route index element={<StudentsPage />} />
          </Route>
          <Route path="teacher" element={<TeacherLayout />}>
            <Route index element={<TeachersPage />} />
          </Route>
          <Route path="class" element={<ClassesLayout />}>
            <Route index element={<ClassesPage />} />
          </Route>
          <Route path="webmanagement" element={<WebManagementLayout />}>
            <Route index element={<Home />} loader={homeLoader}></Route>
            <Route
              path="tuition"
              element={<Tuitions />}
              loader={tuitionLoader}
            ></Route>
            <Route
              path="transport"
              element={<Transport />}
              loader={transpoLoader}
            ></Route>
          </Route>
        </Route>
        ,
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/NotAuth" element={<NotAuthorized />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
