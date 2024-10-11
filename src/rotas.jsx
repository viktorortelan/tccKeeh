
import Landingpage from "./pages/landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}