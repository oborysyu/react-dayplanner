import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
// import { AuthProvider } from "./hooks/useAuth";
import { StrictMode } from "react";
// import {Login} from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route index element={<App />} />
  //       <Route path="login" element={<Login/>} />
  //       <Route path="user" element={<Dashboard/>} />
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
          <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>  
);