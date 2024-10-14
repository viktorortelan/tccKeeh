
import Landingpage from "./pages/landingpage";
import TelaLogin from "./pages/telaLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="/telaLogin" element={<TelaLogin/>}/>
            </Routes>
        </BrowserRouter>
    )
}