import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import University from "./pages/University";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import Checklist from "./pages/checklist";
import Resources from "./pages/resources";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/privateroute";
import Signup from "./pages/signup";


export default function App() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const location = useLocation();
  const noNavbarRoutes = ["/login", "/register", "/signup"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div className="container  mx-auto px-4 min-h-screen flex flex-col">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {!selectedUniversity ? (
                <University onSelectUniversity={setSelectedUniversity} />
              ) : (
                <Dashboard
                  selectedUniversity={selectedUniversity}
                  setSelectedUniversity={setSelectedUniversity}
                />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home selectedUniversity={selectedUniversity} />
            </PrivateRoute>
          }
        />
        <Route
          path="/checklist"
          element={
            <PrivateRoute>
              <Checklist selectedUniversity={selectedUniversity} />
            </PrivateRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <PrivateRoute>
              <Resources selectedUniversity={selectedUniversity} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}