import React from "react";
import { GrantWaterFall } from "../config/Utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserNav() {
  const { users, isLogsedIn, setLoggedIn } = GrantWaterFall();
  const navigate = useNavigate();
  return (
    <nav className="navbar" style={{ backgroundColor: "#222936" }}>
      <div className="container-fluid">
        <div className="navbar-brand text-light">
          {isLogsedIn ? "Admin User Panel" : "Guest User Panel"}
        </div>
        <div>
          {isLogsedIn ? (
            <button
              className="btn btn-light"
              onClick={() => {
                sessionStorage.setItem("isLoggedIn", false);
                setLoggedIn(JSON.parse(sessionStorage.getItem("isLoggedIn")));
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default UserNav;
