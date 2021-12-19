import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import "./styles/main.css";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<p> Prueba </p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
