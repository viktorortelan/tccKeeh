import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TelaLogin() {
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    return(
        <div className="telaLogin">
            <div className="all">
                
                <div className="direita">
                    <div className="centro">
                        <img src="/assets/image/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="esquerda">
                    <div className="card">
                        <h1>Login</h1>
                        <div className="perguntas">
                            <h1>E-mail:</h1>
                            <div className="inputes">
                                <input type="text" placeholder='Usuario@gmail.com'  value={email} onChange={e=>setEmail(e.target.value)}/>
                                <img id='email' src="/assets/image/envelope.svg" alt="envelope" />
                    
                            </div>
                            <div className="reconfigurar">
                                        <h1>
                                            <a href="">Reconfigurar email</a>
                                        </h1>
                                    </div>
                        </div>
                        <div className="perguntas">
                            <h1>Senha:</h1>
                           <div className="inputes">
                                <input type="password" placeholder=' Sua senha' value={senha} onChange={e=>setSenha(e.target.value)}/>
                                <img id='cadeado' src="/assets/image/lock-fill.svg" alt="envelope" />
                           </div>
                                    <div className="reconfigurar">
                                        <h1>
                                            <a href="">Reconfigurar senha</a>
                                        </h1>
                                    </div>
                        </div>
                        
                        <button>Entrar</button>

                    </div>
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