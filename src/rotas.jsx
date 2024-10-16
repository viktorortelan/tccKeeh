
import Landingpage from "./pages/landingpage";
import TelaLogin from "./pages/telaLogin";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/telaLogin" element={<TelaLogin/>}/>
            </Routes>
        </BrowserRouter>
    )
}