import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import "./styles/main.css";

// pages

import Register from "./pages/register";




function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<p> Prueba </p>} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<p> Error </p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
