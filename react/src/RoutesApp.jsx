/*
The RoutesApp component defines the routing structure of the application using the React Router library.
It includes various routes for different pages of the application, such as the home page, user profile page, forms, and authentication.
The component also implements logic to handle protected routes by checking the presence of an access token.

Upon mounting, it adds an event listener to handle cleanup when the user navigates away from the page, ensuring that the access token is deleted from local storage.

Within the component, there's a ProtectedRoute function component that checks for the presence of the access token. If the token is missing, it redirects the user to the admin login page; otherwise, it renders the child component.

The component renders a Routes component containing nested Route components for defining different routes of the application.
Each Route component specifies a path and the corresponding component to render when that path matches the current URL.

Additionally, there's an external link defined within one of the routes, leading to an external profile website.

If none of the defined routes match the current URL, a NotFound component is rendered to handle 404 errors.

Overall, RoutesApp serves as the main component responsible for setting up the routing configuration of the React application, managing navigation between different pages, and handling authentication logic for protected routes.
*/
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { deleteAccessToken, getAccessToken } from "./util/generalFunctions";
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
import Users from "./route/users/Users";
import UserForm from "./route/user-form/UserForm";

const RoutesApp = () => {
  /*
  This useEffect hook adds an event listener to handle cleanup when the user navigates away from the page. 
  It ensures that the access token is deleted from local storage to maintain security.
  */
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      deleteAccessToken();

      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  /*
  This function component, ProtectedRoute, checks for the presence of an access token. 
  If the token is missing, it redirects the user to the admin login page. Otherwise, it renders the child component.
  */
  const ProtectedRoute = (Element) => {
    const token = getAccessToken();

    if (!token) {
      return <Navigate to="/admin-login" replace />;
    }

    return Element.children;
  };

  /*
  The Routes component defines the routing structure of the application. 
  It contains nested Route components, each specifying a path and the corresponding component to render when that path matches the current URL.
  */
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
            <a href="https://www.google.com" target="_blank">
              External Profile Website
            </a>
          }
        />

        <Route path="form" element={<Form />} />
        <Route path="form-reach-out" element={<FormReachOut />} />

        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="signup" element={<Signup />} />

        <Route
          path="users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="users/new"
          key="userCreate"
          element={
            <ProtectedRoute>
              <UserForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="users/:id"
          key="userUpdate"
          element={
            <ProtectedRoute>
              <UserForm />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
