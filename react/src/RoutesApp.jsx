import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getSettings } from "./api/api";
import View from "./view/View";
import Home from "./route/home/Home";
import Wedding from "./route/wedding/Wedding";
import Baptism from "./route/baptism/Baptism";
import Memorial from "./route/memorial/Memorial";
import MasterClass from "./route/master-class/MasterClass";
import Profile from "./route/profile/Profile";
import Form from "./route/form/Form";
import NotFound from "./route/not-found/NotFound";
import AdminLogin from "./route/admin-login/AdminLogin";
import FormReachOut from "./route/form-reach-out/FormReachOut";
import Signup from "./route/signup/Signup";
import Settings from "./route/settings/Settings";
import NewUser from "./route/new-user/NewUser";
import { useStateContext } from "./context/TokenContext";

/**
 * Component representing the routing structure of the application.
 * @returns {JSX.Element} The RoutesApp component.
 */
const RoutesApp = () => {
  // State and effect hooks for fetching settings
  const { token } = useStateContext();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await getSettings();
        setContent(response);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  /**
   * Component representing a protected route.
   * @param {object} Element - The child component to render.
   * @returns {JSX.Element} The ProtectedRoute component.
   */
  const ProtectedRoute = (Element) => {
    if (!token) {
      return <Navigate to="/admin-login" replace />;
    }

    return Element.children;
  };

  // Routing structure of the application
  return (
    <Routes>
      <Route element={<View />}>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="baptism" element={<Baptism />} />
        <Route path="memorial" element={<Memorial />} />
        <Route path="m-class" element={<MasterClass />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="blog"
          element={
            <a href={content && content.blog[0].link} target="_blank">
              External Profile Website
            </a>
          }
        />
        <Route path="form" element={<Form />} />
        <Route path="form-reach-out" element={<FormReachOut />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="users/new"
          key="userCreate"
          element={
            <ProtectedRoute>
              <NewUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="users/:id"
          key="userUpdate"
          element={
            <ProtectedRoute>
              <NewUser />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
