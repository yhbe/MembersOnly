import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";

function RouterSwitch() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [token,setToken] = useState(undefined)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setToken={setToken} token={token}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
