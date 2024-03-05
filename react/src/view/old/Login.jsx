import { Link } from "react-router-dom";
import * as api from "../../api/api.js";
import { createRef } from "react";
import { useStateContext } from "../../context/TokenContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    api.login(email, password)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate('/users');

      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }

          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}
