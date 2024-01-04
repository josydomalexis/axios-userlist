import { createContext, useCallback, useEffect, useState } from "react";
import { getData } from "./config/Api";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Userlist from "./components/Userlist";
import Login from "./Login";

export const WaterFall = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [isLogsedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getData(setUsers);
  }, []);

  const dataFall = { users, setUsers, isLogsedIn, setLoggedIn };
  return (
    <WaterFall.Provider value={dataFall}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </WaterFall.Provider>
  );
}
export default App;
