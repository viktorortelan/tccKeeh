import './index.scss';
import { Link } from 'react-router-dom';
import imagem from '../../assets/image/banner.svg'
import { useRef, useState } from 'react';

export default function Landingpage() {
    const especialidadesRef = useRef(null);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [mostrarPopup2, setMostrarPopup2] = useState(false);
    const [mostrarPopup3, setMostrarPopup3] = useState(false);
    const [mostrarPopup4, setMostrarPopup4] = useState(false);
    const [mostrarPopup5, setMostrarPopup5] = useState(false);
    const [mostrarPopup6, setMostrarPopup6] = useState(false);
    const [mostrarPopup7, setMostrarPopup7] = useState(false);

    const scrollToEspecialidades = () => {
        especialidadesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    
    const abrirPopup = () => {
        setMostrarPopup(true);
    };

   
    const fecharPopup = () => {
        setMostrarPopup(false);
    };


    const clicaFora = (e) => {
        if (e.target.classList.contains('popup-background')) {
            fecharPopup();
        }
    };


    const abrirPopup2 = () => {
        setMostrarPopup2(true);
    };

   
    const fecharPopup2 = () => {
        setMostrarPopup2(false);
    };


    const clicaFora2 = (e) => {
        if (e.target.classList.contains('popup-background')) {
            fecharPopup2();
        }
    };
    

    return (
        <div className="landpage">
            <div className="cabecalho">
                <img src="assets/image/logo.webp" alt="nao foi" />
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Sobre Nós</Link>
                    <Link to='#' onClick={scrollToEspecialidades}>Especialidades</Link>
                    <Link to='/'>Curiosidades</Link>
                    <Link to='/'>Contatos</Link>
                    
                        <Link id='oloco' to='/telaLogin'> Login </Link>
                       
                </div> 
            </div>

            <div className="banner" style={{ backgroundImage: `URL(${imagem})` }}>
                <div className='protecao'>   
                    <div className="car">
                        <h1> O melhor para a sua <span>saúde</span></h1>
                        <button className='agendamento'> Faça seu agendamento  <i><img src="/assets/image/right-arrow.png" alt="Agendar" /> </i> </button>
                    </div> 
                </div>
            </div>

            <div className="sobre">
                <div className="tex"> 
                    <h1>Sobre nós</h1>
                    <p>Nosso objetivo é ir além de uma simples seção de fisioterapia e pilates, buscamos impulsionar a saúde dos nossos clientes...</p>
                    <button>Saiba mais</button>
                </div>
                <img src="/assets/image/doutora.jpg" alt="Sobre nós" />
            </div>


            <div className="especialidades" ref={especialidadesRef}>
                <h1>Nossas Especialidades</h1>
                <div className="quatro">
                    <div className="info">
                        <img onClick={abrirPopup} src="/assets/image/card7.png" alt="" />
                    
                    </div>
                    <div className="info">
                        <img onClick={abrirPopup2} src="/assets/image/card.png" alt="" />
                        
                    </div>
                    <div className="info">
                        <img src="/assets/image/card7.png" alt="" />
                        
                    </div>
                    <div className="info">
                        <img src="/assets/image/card7.png" alt="" />
                        
                    </div>
                   
                </div>

                <div className="tres">
                    <div className="info">
                        <img src="/assets/image/card7.png" alt="" />
                        
                    </div>
                    <div className="info">
                        <img src="/assets/image/card7.png" alt="" />
                        
                    </div>
                    <div className="info">
                        <img src="/assets/image/card7.png" alt="" />
                        
                    </div>
                </div>

            </div>

            {mostrarPopup && (
                <div className="popup-background" onClick={clicaFora}>
                    <div className="popup">
                        <div className="infos">
                            <h1>Acupuntura</h1>
                            <div className="text">
                                <p>Envolve o uso de agulhas finas para estimular pontos específicos no corpo, visando aliviar a dor e promover o equilíbrio energético.</p>
                                <button onClick={fecharPopup}>Agendar</button>
                            </div>
                        </div>
                        <img src="/assets/image/business 1.png" alt="Acupuntura" />
                    </div>
                </div>
            )}
            {mostrarPopup2 && (
                <div className="popup-background" onClick={clicaFora2}>
                    <div className="popup">
                        <div className="infos">
                            <h1>Esportiva</h1>
                            <div className="text">
                                <p>É voltada para atletas, ajudando na prevenção e tratamento de lesões relacionadas à prática esportiva, além de otimizar o desempenho.</p>
                                <button onClick={fecharPopup2}>Agendar</button>
                            </div>
                        </div>
                        <img src="/assets/image/business 1 (8).png" alt="Acupuntura" />
                    </div>
                </div>
            )}


            <div className='conteudoInformativos'>
                <div className="card1">
                    <img src="/assets/image/Inserir um subtítulo (1) 1.png" alt="" />
                </div>
                <div className="card2">
                    <img src="/assets/image/Dor (1) 1.png" alt="" />
                    <img src="/assets/image/Existem 3 tipos de dores (2) 1.png" alt="" />
                </div>
            </div>

        
        

            <div className="rodape">
                <div className="um">
                    <img id='logo' src="/assets/image/sla1.png" alt="logoRodape" />
                    <div className="redes">
                        <img id='a' src="/assets/image/linkedin.svg" alt="" />
                        <img id='b' src="/assets/image/instagram.svg" alt="" />
                        <img id='c' src="/assets/image/twitter-x.svg" alt="" />
                    </div>
                </div>

                <div className="dois">
                    <h1>HSSW Code.</h1>
                    <h1>O que persiste é o aprendizado.</h1>
                </div>

                <div className="tres">
                    <h1>Explore</h1>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Sobre Nós</Link>
                        <Link to='#' onClick={scrollToEspecialidades}>Especialidades</Link>
                        <Link to='/'>Curiosidades</Link>
                        <Link to='/'>Contatos</Link>
                    </div>
                </div>

                <div className="quatro">
                    <h1>Politica de privacidade</h1>
                    <h1>FAQ</h1>
                </div>
            </div>
        </div>
    );
}
