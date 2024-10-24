import './index.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
   

   


    return (
        <div className="cadastro">
           <div className="tela">
                <div className="esquerda">
                    <img src="/assets/image/logo1.png" alt="banner da empresa" />

                        <div className="textos">
                            <h1>Bem-vindo a FisioSaúde</h1>
                            <p>Faça o seu Cadastro para poder acessar. </p>
                        </div>

                </div>

                <div className="direita">

                        <div className="cartao">
                            <div className="text">
                                <h1>Cadastre-se</h1>
                            </div>
                            <div className="perguntas">
                                <div className="input">
                                    <h1> EMAIL: </h1>
                                    <input type="text" placeholder='Ex: Daniela@gmail.com'   value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="input">
                                    <h1>SENHA:</h1>
                                    <input type="text"  placeholder=' Digite sua senha'   value={cpf} onChange={e => setCpf(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <h1>CONFIRMAR SENHA:</h1>
                                    <input type="text"  placeholder=' Digite sua senha novamente'   value={cpf} onChange={e => setCpf(e.target.value)}/>
                                </div>

                            </div>

                            

                            <button>Cadastre-se</button>
                                <div className="cadastroNovo"> 
                                    <Link to="/loginCliente">Já tem conta? <a href="">Faça seu login</a> </Link>
                               </div>
                            
                        </div>

                </div>
           </div>

            <div className="risco"></div>
        </div>
    )
}
