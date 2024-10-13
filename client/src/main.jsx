<<<<<<< Updated upstream
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
// import EBService from "./Pages/EBService.jsx";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import AddWorkPage from './Pages/Addwork.jsx'
//import AddWorkPage from './Pages/Addwork.jsx'
//import Invoice from './Pages/Invoice.jsx'
//import HomePage from './Pages/HomePage.jsx'
// import EBService from './Pages/EBService.jsx'
//import SignupOption from './Pages/SignupOption'
import ContactUs from './Pages/ContactUs.jsx'
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
=======
  <BrowserRouter>
    <ContactUs />
>>>>>>> Stashed changes
    </BrowserRouter>
  </React.StrictMode>
);
