import React from "react";
import { MantineProvider } from "@mantine/core";
import Homepage from "../pages/homepage/Homepage";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

//Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
