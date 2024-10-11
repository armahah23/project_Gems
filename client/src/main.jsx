import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AddWorkPage from './Pages/Addwork.jsx'
//import AddWorkPage from './Pages/Addwork.jsx'
//import Invoice from './Pages/Invoice.jsx'
//import HomePage from './Pages/HomePage.jsx'
// import EBService from './Pages/EBService.jsx'
//import SignupOption from './Pages/SignupOption'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <SignupOption /> */}
  </React.StrictMode>,
)
