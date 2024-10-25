import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function AddProfissional(){
    return(
        <div className="addprofissional">
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
                    <div className="h1">
                        <h1> Profissionais </h1>
                        <h2> Coladoradores</h2>


                        


                    </div>
                

                    <p> Usuários profissionais são os usuários que atendem em sua clínica e que poderão ou não utilizar o sistema </p>

                    <button>+ Adicionar profissional</button>

                    <table>
                            <tr>
                                
                                <th> Nome </th>
                                <th> E-mail </th>
                                <th>Acesso ao sistema </th>
                                <th> Ações </th>
                            </tr>

                            <tr>
                                
                                <td> Kevillyn Sandes</td>
                                <td> Kevillynsandes07@gmail.com</td>
                                <td> </td>
                                <td> <img src="/assets/image/bx-edit.svg" alt="" /> 
                                    <img src="/assets/image/bx-lock-open-alt.svg" alt="" />
                                </td>
                                
                            </tr>
                   
                        </table>
                </div>
                
            
                

    
            </div>

            
       
        </div>
    )
}