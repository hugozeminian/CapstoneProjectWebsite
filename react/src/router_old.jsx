import { createBrowserRouter, Navigate } from "react-router-dom";
import ImageExample from "./views/ImageExample.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Login from "./view/Login.jsx";
import NotFound from "./view/NotFound.jsx";
import Signup from "./view/Signup.jsx";
import Users from "./view/Users.jsx";
import UserForm from "./view/UserForm.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/imageexample',
        element: <ImageExample />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;
