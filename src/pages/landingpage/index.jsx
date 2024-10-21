import './index.scss';

import imagem from '../../assets/image/banner.svg'
import Popup from '../../components/popup';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Landingpage() {
    
    const [img1, setImg1] = useState(0);
    const [img2, setImg2] = useState(0);
    const [img3, setImg3] = useState(0);
    const [img4, setImg4] = useState(0);
    const [img5, setImg5] = useState(0);
    const [img6, setImg6] = useState(0);
    const [img7, setImg7] = useState(0);



      function imgF1() {
       if (img1 == 0) {
            setImg1(1);
        } else {
            setImg1(0);
        }
    }

    function imgF2() {
       if (img2 == 0) {
            setImg2(1);
        } else {
            setImg2(0);
        }
    } 
    function imgF3() {
        if (img3 == 0) {
             setImg3(1);
         } else {
             setImg3(0);
         }
     } 
     function imgF4() {
        if (img4 == 0) {
             setImg4(1);
         } else {
             setImg4(0);
         }
     } 
     function imgF5() {
        if (img5 == 0) {
             setImg5(1);
         } else {
             setImg5(0);
         }
     } 
     function imgF6() {
        if (img6 == 0) {
             setImg6(1);
         } else {
             setImg6(0);
         }
     } 
     function imgF7() {
        if (img7 == 0) {
             setImg7(1);
         } else {
             setImg7(0);
         }
     } 

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



            <div className="banner" style={{ backgroundImage: `URL(${imagem})` }}>

                    <div className='bbb' style={{ zIndex: `${img1 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF1}>X</button>
                    <Popup
                    titulo={'Acupuntura'} 
                    img={'business 1.png'}
                    texto={'Envolve o uso de agulhas finas para estimular pontos específico no corpo, visando aliviar a dor e promover o equilíbrio energético.'}
                    index={img1 == 0 ? '-1' : '0'}
                    />
                    </div>
                   
                    <div className='bbb' style={{ zIndex: `${img2 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF2}>X</button>
                    <Popup
                    titulo={'Gerontologia'} 
                    img={'business 1 (2).png'}
                    texto={'Especializada em atender idosos, abordando questões como mobilidade, prevenção de quedas e manutenção da funcionalidade.'}
                    index={img2 == 0 ? '-1' : '0'}
                    />
                    </div>

                    <div className='bbb' style={{ zIndex: `${img3 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF3}>X</button>
                    <Popup
                    titulo={'Neurociência da Dor'} 
                    img={'business 1 (3).png'}
                    texto={'Trata pacientes com distúrbios neurológicos, como AVC, lesões medulares e doenças neuromusculares, visando melhorar a função e a independência..'}
                    index={img3 == 0 ? '-1' : '0'}
                    />
                    </div>

                    <div className='bbb' style={{ zIndex: `${img4 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF4}>X</button>
                    <Popup
                    titulo={'Respiratoria'} 
                    img={'business 1 (9).png'}
                    texto={'Foca na avaliação e tratamento de pacientes com condições respiratórias, como asma, bronquite e doença pulmonar obstrutiva crônica.'}
                    index={img4 == 0 ? '-1' : '0'}
                    />
                    </div>

                    <div className='bbb' style={{ zIndex: `${img5 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF5}>X</button>
                    <Popup
                    titulo={'Saúde da mulher '} 
                    img={'business 1 (4).png'}
                    texto={'Concentra-se em condições específicas das mulheres, como gestação, pós-parto, incontinência urinária e disfunções do assoalho pélvico.'}
                    index={img5 == 0 ? '-1' : '0'}
                    />
                    </div>

                    <div className='bbb' style={{ zIndex: `${img6 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF6}>X</button>
                    <Popup
                    titulo={'Quiropraxia'} 
                    img={'business 1 (5).png'}
                    texto={'Trata pacientes com distúrbios neurológicos, como AVC, lesões medulares e doenças neuromusculares, visando melhorar a função e a independência.'}
                    index={img6 == 0 ? '-1' : '0'}
                    />
                    </div>

                    <div className='bbb' style={{ zIndex: `${img7 == 0 ? '-1' : '0'}` }}> 
                    <button className='btn-x' onClick={imgF7}>X</button>
                    <Popup
                    titulo={'Esportiva'} 
                    img={'business 1 (8).png'}
                    texto={'É voltada para atletas, ajudando na prevenção e tratamento de lesões relacionadas à prática esportiva, além de otimizar o desempenho.'}
                    index={img7 == 0 ? '-1' : '0'}
                    />
                    </div>
                   

                <div className='protecao'>
                    <div className="car">
                        <h1> O melhor para a sua <span>saúde</span></h1>
                        <button className='agendamento'> Faça seu agendamento  <i><img src="/assets/image/right-arrow.png" /> </i> </button>



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


            <div className="fotos">

                <div className="titulo">
                    <hr />
                    <h1>  Especialidades </h1>
                    <hr />
                </div>

                <div className='row-1'>
                        

                        
                        <img src="/assets/image/card.png" onClick={imgF1} width={250}/>
                  
                        <img src="/assets/image/card (1).png" onClick={imgF2} width={250}/>
                 
                        <img src="/assets/image/card (2).png" alt="" onClick={imgF3}  width={250}/>
                
                        <img src="/assets/image/card (3).png" alt="" onClick={imgF4}  width={250}/>
                 
                </div>

                <div className='row-2'>

                 
                        <img src="/assets/image/card (4).png" onClick={imgF5} width={250}/>
                

                  
                        <img src="/assets/image/card (5).png" onClick={imgF6} width={250}/>
                  

                        <img src="/assets/image/card (6).png" onClick={imgF7} width={250}/>

                </div>
              

            </div>
            <div className='conteudoInformativos'>



<div className="card1">
    <img src="/assets/image/Inserir um subtítulo (1) 1.png" alt="" />
</div>
<div className="card2">
    <img className='img1' src="/assets/image/Dor (1) 1.png" />
    <img className='img2' src="/assets/image/Existem 3 tipos de dores (2) 1.png" />
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