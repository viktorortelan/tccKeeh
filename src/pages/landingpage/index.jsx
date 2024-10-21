import './index.scss';
import { Link } from 'react-router-dom';
import imagem from '../../assets/image/banner.svg'



export default function Landingpage () {
    return (
        <div className="landpage">
            <div className="cabecalho">
                <img src="assets/image/logo.webp" alt="nao foi" />
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Sobre Nós</Link>
                    <Link to='/'>Especialidades</Link>
                    <Link to='/'>Curiosidades</Link>
                    <Link to='/'>Contatos</Link>
                    <div className="oloco">
                        <Link to='/telaLogin'> Login </Link>
                    </div>    
                </div> 
            </div>
           


            <div className="banner" style={{backgroundImage: `URL(${imagem})`}}>

                <div className='protecao'>   
                    <div className="car">
                        <h1> O melhor para a sua <span>saúde</span></h1>
                        <button className='agendamento'> Faça seu agendamento  <i><img src="/assets/image/right-arrow.png"  /> </i> </button>



                    </div> 
                </div>

                   


            </div>
            
            
            <div className="sobre">

                <div className="tex"> 
                            
                    <h1>Sobre nós</h1>

                    <p>Nosso objetivo é ir além de uma simples seção de fisioterapia e pilates, buscamos impulsionar a sáude dos nossos clientes. Entendemos que cada organização é única em sua estrutura e necessidade, por isso estamos comprometidos em oferecer soluções personalizadas e integradas à sua realidade, independente do seu porte.</p>

                    <p>Estamos prontos para ajudá-lo a alcançar seus objetivos. Nossa experiência e dedicação em transformar-lo uma nova pessoa são a base para o seu sucesso. 
                    Junte-se a nós e descubra.</p>
                            
                    <button>Saiba mais</button>

                </div>
                       

                <img src="/assets/image/doutora.jpg" alt="" />

            </div>


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
                        <Link to='/'>Especialidades</Link>
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
    )
}