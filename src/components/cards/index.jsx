import { useState } from "react";
import './index.scss';

export default function Card() {
    const [exibir, setExibir] = useState(true);

    const mostrar = () => {
        setExibir(!exibir);
    };

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
        <div className={`contener ${exibir ? "show" : "hide"}`}>  {/* sei que vc nn sabe o que é isso, isso é basicamente um if else, ele valida no scss se for verdadeiro ou falso. */}
       
           

                <div className="cont1">
                    <div className="inpute">
                        <h1>Nome: </h1>
                        <input type="text" />
                    </div>
                </div>    
                
                <div className="cont2">
                    <div className="inpute">
                        <h1> Grupo: </h1>

                        <input type="text" />
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
                        <h1> Genero: </h1>

                        <input type="text" />

                    </div>

                    <div className="inpute">
                        <h1> Email: </h1>

                        <input type="text" />
                    </div>

                </div>

                <div className="cont4">

                    <div className="inpute">
                        <h1> Celular: </h1>
                        <input type="text" placeholder='+55' />
                    </div>

                    <div className="inpute">
                        <h1>CPF:</h1>
                        <input type="text" />
                    </div>
                    <div className="inpute">
                        <h1> RG: </h1>
                        <input type="text" />
                    </div>
                </div>
            
        </div>

    </div>
    );
}


