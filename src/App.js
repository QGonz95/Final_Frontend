import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import CreateEntry from "./components/CreateEntry";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";



function App() {
  const [baseUrl] = useState("https://waves-upon-waves.herokuapp.com/");
  const [currentUser, setCurrentUser] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigation currentUser={currentUser} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage baseUrl={baseUrl} currentUser={currentUser} search={search} />
          }
        />
        <Route
          path="/profile"
          element={
            localStorage.getItem("currentUser") ? (
              <Profile baseUrl={baseUrl} currentUser={currentUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            localStorage.getItem("currentUser") ? (
              <Navigate to="/" />
            ) : (
              <Login
                setCurrentUser={setCurrentUser}
                baseUrl={baseUrl}
                currentUser={currentUser}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            localStorage.getItem("currentUser") ? (
              <Navigate to="/" />
            ) : (
              <Signup
                setCurrentUser={setCurrentUser}
                baseUrl={baseUrl}
                currentUser={currentUser}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
