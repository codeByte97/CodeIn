import React, { createContext, useEffect, useReducer, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { reducer, initialState } from "./MiddleWare/reducer";
import './App.css';
import HomePage from "./HomePage";
import LoginPage from "./Components/Login/Login";
import SignupPage from "./Components/Signup/Signup";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import LeaderBoardList from "./Components/LeaderBoard";
import Dashboard from "./Components/Dashboard";
import ContestPage from "./Components/ContestPage";
import UserDashboard from "./Components/userDashboard";
import ProfilePage from "./Components/Profile";

export const userContext = createContext();

function Navigation() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await axios.get('/token');
        console.log(res);
        if (res.data.login === true) {
          dispatch({ type: "USER", payload: { login: res.data.login, usertype: res.data.usertype } });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetails();
  }, []);

  if (isLoading) {
    // Display a CircularProgress component while loading
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Profile/:id" element={<Dashboard />} />
          <Route exact path="/Dashboard" element={<UserDashboard />} />
          <Route exact path="/Register" element={<SignupPage />} />
          <Route exact path="/LeaderBoard" element={<LeaderBoardList />} />
          <Route exact path="/Contests" element={<ContestPage />} />
          <Route exact path="/Profile" element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default Navigation;
