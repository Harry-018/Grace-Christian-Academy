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

import RootLayout from "./Layout/RootLayout.jsx";
import ParentsDashboard from "./Home/ParentsDashboard.jsx";
import ParentsLayout from "./Layout/ParentsLayout.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="transport" element={<TransportationPage />} />
        <Route path="admission" element={<Admission />} />
        <Route path="tuition" element={<TuitionPage />} />
      </Route>, 
      <Route path="/parents" element={<ParentsLayout />}>
        <Route index element={<ParentsDashboard />} />
      </Route>,
      </>
      
    ),
  );


  return <RouterProvider router={router} />;
};

export default App;
