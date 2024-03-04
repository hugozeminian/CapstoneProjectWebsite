import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { deleteAccessToken } from "./util/generalFunctions";
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

  return (
    <>
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

          <Route path="users" element={<Users />} />
          <Route path="users/new" key="userCreate" element={<UserForm />} />
          <Route path="users/:id" key="userUpdate" element={<UserForm />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesApp;
