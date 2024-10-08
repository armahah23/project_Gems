import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Addwork from './Pages/Addwork.jsx';
import Esignup from "./Pages/Esignup.jsx";
import Asignup from "./Pages/Asignup.jsx";
import AddWorkPage from "./Pages/Addwork.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";


function App() {
  return (
    <>
      <Routes>
        {/* <Addwork /> */}
        <Route path="/" element={<Home />} />
        <Route path="/esignup" element={<Esignup />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/addwork" element={<AddWorkPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/csignup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
