import './index.scss';
import Cabecalho from '../../components/cabecalho';


export default function InserirPacotes(){
    return(
        <div className="inserirpacotes">
            <div className="protecao">
                <Cabecalho/>
                <div className="t">
                <div className="text">
                    <h1>Usuarios</h1>
                    <h2>Usuarios</h2>
                </div>

                <div className="text">
                    <h1>Modelos</h1>
                    <h2>Documentação</h2>
                </div>

                <div className="text">
                    <h1>Finanças</h1>
                    <h2>Pacotes </h2>
                </div>

                <div className="text">
                    <h1>Notificações</h1>
                    <h2>Para Cliente</h2>
                </div>

                <div className="text">
                    <h1>Inventario </h1>
                    
                </div>
                </div>
            </div>
            
            <div className="direita">
                <h1> Pacotes </h1>

                <p> Cadastre pacotes para os recebimentos de Cliente. Exemplo: 4 sessões por R$400,00 </p>

                <button>+ Inserir pacote</button>
            </div>
            
        </div>
    )
}