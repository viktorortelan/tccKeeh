import './index.scss';

import { useState } from 'react';








export default function Login() {
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
   

   


    return (
        <div className="tela-login">
           <div className="tela">
                <div className="esquerda">
                    <img src="/assets/image/sla1.png" alt="banner da empresa" />

                        <div className="textos">
                            <h1>Bem-vindo a FisioSaúde</h1>
                            <p>Faça o seu Login para poder marcar sua consulta. </p>
                        </div>

                </div>

                <div className="direita">

                        <div className="cartao">
                            <h1>Login</h1>

                            <div className="perguntas">
                                    <input type="text" placeholder=' Digite seu email'   value={email} onChange={e => setEmail(e.target.value)} />
                                    <input type="text"  placeholder=' Digite sua senha'   value={cpf} onChange={e => setCpf(e.target.value)}/>
                            </div>

                            

                            <button>Cadastrar</button>

                                <div className="cadastroNovo"> 
                                    <h1>Ainda não tem conta? <a href="">Faça seu cadastro</a> </h1>
                               </div>
                            
                        </div>

                </div>
           </div>

            <div className="risco"></div>
        </div>
    )
}
