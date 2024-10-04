import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Addwork from './Pages/Addwork.jsx';
import Esignup from "./Pages/Esignup.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Addwork /> */}
        <Route path="/esignup" element={<Esignup />} />
      </Routes>
    </>
  );
}

export default App;
