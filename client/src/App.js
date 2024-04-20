import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const {user} = useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register/> }></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route path="/messenger" element={!user ? <Home /> : <Messenger />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;