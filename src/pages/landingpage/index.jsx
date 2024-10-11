import './index.scss';

import imagem from '../../assets/image/banner.svg'



export default function Landingpage () {
    return (
        <div className="landpage">
            <div className="cabecalho">
                <img src="assets/image/logo.webp" alt="nao foi" />

                <h1>Home</h1>
                <h1>Sobre nós </h1>
                <h1> Especialidades </h1>
                <h1> Curiosidades </h1>
                <h1> Contato </h1>
                <h1> Login </h1>
            </div>
           


            <div className="banner" style={{backgroundImage: `URL(${imagem})`}}> </div>
        </div>
    )
}