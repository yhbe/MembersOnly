import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";

function RouterSwitch() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
