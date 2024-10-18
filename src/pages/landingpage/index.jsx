import './index.scss';

import imagem from '../../assets/image/banner.svg'



export default function Landingpage () {
    return (
        <div className="landpage">
            <div className="cabecalho">
                <img src="assets/image/logo.webp" alt="nao foi" />

                <h1> Home </h1>
                <h1> Sobre nós </h1>
                <h1> Especialidades </h1>
                <h1> Curiosidades </h1>
                <h1> Contato </h1>
                <h1> Login </h1>

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

                        <div className="pop">
                            
                            <div className="pop">
                            <img src="/assets/image/card.png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card(1).png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card2.png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card3.png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card4.png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card5.png" alt="" />

                            </div>
                            <div className="pop">
                            <img src="/assets/image/card6.png" alt="" />

                            </div>
                            <div className="pop">
                                <img src="/assets/image/card7.png" alt="" />
                            </div>
                            
                            
                        </div>-up

        </div>
    )
}