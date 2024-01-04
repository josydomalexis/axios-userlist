import React from "react";
import "./Login.css";
import Credentials from "./config/AdminConfig";
import { Link, useNavigate } from "react-router-dom";
import { GrantWaterFall } from "./config/Utils";
import { Formik } from "formik";

function Login() {
  const { users, setUsers, setLoggedIn } = GrantWaterFall();
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    // localStorage.setItem("isLoggedIn", true);
    // setLoggedIn(localStorage.getItem("isLoggedIn"));
    sessionStorage.setItem("isLoggedIn", true);
    setLoggedIn(JSON.parse(sessionStorage.getItem("isLoggedIn")));
    navigate("/userlist");
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h1>
            <span className="text-warning">User Database Management</span>
          </h1>
          <p>Login here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-10 col-lg-8 col-xl-7 col-sm-12">
          <div className="login-form">
            <form onSubmit={(e) => Login(e)}>
              <div className="form-group pb-3">
                <label>User Name</label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  name="username"
                />
              </div>
              <div className="form-group pb-3">
                <label>Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-warning me-2 ">
                Login
              </button>
              <button type="submit" className="btn btn-secondary" disabled>
                Register
              </button>
            </form>
            <div className="mt-5">
              <Link
                to="/userlist"
                onClick={() => setLoggedIn(false)}
                className="btn btn-outline-dark"
              >
                Login as Guest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
