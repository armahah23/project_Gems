import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Addwork from './Pages/Addwork.jsx';
import Esignup from "./Pages/Esignup.jsx";
import Asignup from "./Pages/Asignup.jsx";
import AddWorkPage from "./Pages/Addwork.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import HomePage from "./Pages/HomePage.jsx";
import SignupOption from "./Pages/SignupOption.jsx";


function App() {
  return (
    <>
      <Routes>
        {/* <Addwork /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/esignup" element={<Esignup />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/addwork" element={<AddWorkPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/csignup" element={<Signup />} />
        <Route path="/signupoption" element={<SignupOption />} />
      </Routes>
    </>
  );
}

export default App;
