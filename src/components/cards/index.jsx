import { useState } from "react";
import './index.scss';

export default function Card(props) {
    const [exibir, setExibir] = useState(false);

    const mostrar = () => {
        setExibir(!exibir);
    };

    const [exibi, setExibi] = useState(false);

    const colocar = () => {
        setExibi(!exibi);
    };

    const [visualizar, setVisualizar] = useState(false);

    const endereco = () => {
        setVisualizar (!visualizar);
    }

    const [coloca, setColoca] = useState(false);

    const enderec = () => {
        setColoca(!coloca);
    }



    return (
        <div className="cards">
        <div className="cabecalho">
            <h1> 1. Informações Pessoais</h1>
            
            <button onClick={mostrar} className="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                </svg>
             </button>  
            
        </div>  

     
        
        <div className={`contener ${exibir ? "show" : "hide"}`}>  
           

                <div className="cont1">
                    <div className="inpute">
                        <h1>Nome: </h1>
                        <input type="text" placeholder="Digite seu nome"/>
                    </div>
                </div>    
                
                <div className="cont2">
                    <div className="inpute">
                        <h1> Grupo: </h1>

                        <input type="text" placeholder="Selecione" />
                    </div>

                    <div className="inpute">
                        <h1> Data de Nascimento:</h1>

                        <input type="date" />
                    </div>

                    <div className="inpute">
                        <h1> Idade: </h1>

                        <input type="text" />

                    </div>
                </div>

                <div className="cont3">
                    <div className="inpute">
                        <h1> Gênero: </h1>

                        <input type="text" placeholder="Selecione" />

                    </div>

                    <div className="inpute">
                        <h1> E-mail: </h1>

                        <input type="text" placeholder=" Digite seu email"/>
                    </div>

                </div>

                <div className="cont4">

                    <div className="inpute">
                        <h1> Celular: </h1>
                        <input type="text" placeholder='+55' />
                    </div>

                    <div className="inpute">
                        <h1>CPF:</h1>
                        <input type="text" placeholder="___.___.___.__" />
                    </div>
                    <div className="inpute">
                        <h1> RG: </h1>
                        <input type="text" />
                    </div>
                </div>
            
        </div>


        <div className="cabecalho">
            <h1> 2. Informações Financeiras</h1>
            
            <button onClick={colocar} className="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                </svg>
             </button>  
            
        </div>  

        <div className={`contener ${exibi ? "show" : "hide"}`}>  
        <div className="cont3">
                    <div className="inpute">
                        <h1> Valor Financeiro: </h1>

                        <input type="text"  placeholder="Por sessão"/>

                    </div>

                    <div className="inpute">
                        <h1> Valor da Sessão: </h1>

                        <input type="text" placeholder="R$: 0,00"/>
                    </div>

                </div>

        </div>
        
        <div className="cabecalho">
            <h1> 3. Endereço </h1>
            
            <button onClick={endereco} className="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                </svg>
             </button>  
            
        </div>  

        <div className={`contener ${ visualizar ? "show" : "hide"}`}>

            <div className="cont4">

                <div className="inpute">
                    <h1> País: </h1>
                    <input type="text" placeholder='+55' />
                </div>

                <div className="inpute">
                    <h1>CEP:</h1>
                    <input type="text" placeholder="_____-___" />
                </div>
                <div className="inpute">
                    <h1> Cidade: </h1>
                    <input type="text" />
                </div>
            
                <div className="inpute1">
                    <h1> Estado: </h1>
                    <input type="text" />
                </div>
            </div>

            <div className="cont3">
                    <div className="inpute1">
                        <h1> Endereço : </h1>

                        <input type="text"  />

                    </div>

                    <div className="inpute2">
                        <h1> Numero: </h1>

                        <input type="text" />
                    </div>

            </div>

            <div className="cont3">
                    <div className="inpute">
                        <h1> Bairro: </h1>

                        <input type="text"  />

                    </div>

                    <div className="inpute">
                        <h1> Complemento: </h1>

                        <input type="text" />
                    </div>

                </div>
            
        </div>

        <div className="cabecalho">
            <h1> 4. Responsavel </h1>
            
            <button onClick={enderec} className="i">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                </svg>
             </button>  
            
        </div>  

        <div className={`contener ${ coloca ? "show" : "hide"}`}>  

             <div className="cont1">
                    <div className="inpute">
                        <h1>Nome do Responsável : </h1>
                        <input type="text" placeholder="Digite seu nome"/>
                    </div>
                </div>    
            

            <div className="cont3">

                    <div className="inpute">
                        <h1> CPF : </h1>

                        <input type="text"  placeholder="___.___.___-__"/>

                    </div>
            
                    <div className="inpute">
                        <h1> Telefone : </h1>

                        <input type="text" placeholder="(__) _____-____"/>
                    </div>
            </div>
        </div>     

        
        


    </div>


        
    );

    
}


