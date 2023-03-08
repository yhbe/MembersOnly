import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";

function RouterSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
