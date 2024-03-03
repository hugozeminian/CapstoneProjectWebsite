import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider.jsx";
import { useEffect } from "react";
import * as api from "../../api/api.js";

export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();



  const onLogout = ev => {
    ev.preventDefault()

    api.logout()
      .then(() => {
        setUser({});
        setToken(null);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      })
  }


  useEffect(() => {
    api.fetchUserData()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  }, []);


  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/imageexample">Image Example</Link>
        <Link to="/users">Users</Link>
        {token &&
          <Link to="/users">Settings</Link>}
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name} &nbsp; &nbsp;
            {token && <a onClick={onLogout} className="btn-logout" href="#">Logout</a>}
            {!token && <Link className="btn-logout" to="/login">Login</Link>}
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
    </div>
  )
}
