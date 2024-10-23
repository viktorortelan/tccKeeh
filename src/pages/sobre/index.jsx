import './index.scss';
import { Link, useNavigate } from 'react-router-dom';


export default function Sobre () {

    const navegacao = useNavigate();

    const handleScrollToSection = (sectionId) => {
        navegacao("/", { state: { sectionId } });

    };


    return (
        <div className="sobreMais">
            <div className="cabecalho">
                <img src="assets/image/logo.webp" alt="nao foi" />
                <div className="links">
                    <button className='button' onClick={() => handleScrollToSection('secao4')}>Home</button>
                    <button className='button' onClick={() => handleScrollToSection('secao3')}>Sobre Nós</button>
                    <button className='button' onClick={() => handleScrollToSection('secao1')}>Especialidades</button>
                    <button className='button' onClick={() => handleScrollToSection('secao2')}>Curiosidades</button>
                    <Link to="/">Contatos</Link>
                    
                    <Link id='oloco' to='/telaLogin'> Login </Link>
                       
                </div> 
            </div>


            <div className="sobre">

            </div>

        </div>

    );
}
