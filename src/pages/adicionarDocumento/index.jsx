import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function AddDocumento(){
    return(
        <div className="adddocumento">
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
                        <h1> Documentos </h1>
                        


                        


                    </div>
                

                    <p> Nesse módulo você envia ou cria seu próprio documento personalizado. Na opção de Adicionar Documentos, você pode: ° Adicionar um documento fazendo upload de arquivos úteis como: modelo de anamnese, modelo de contratos, modelo de testes psicológicos, recibos, etc.</p>

                    <button>+ Adicionar Documentos</button>

                    <table>
                            <tr>
                                
                                <th> Tipo </th>
                                <th> Título </th>
                                <th> Conteúdo  </th>
                                <th> Data de Cadastro  </th>
                                <th> Ações </th>
                            </tr>

                            <tr>
                                
                                <td> Atestado</td>
                                <td> Atestado- Modelo 1</td>
                                <td> Documento personalizado </td>
                                <td> 17/09/2024 </td>
                                <td> <img src="/assets/image/bx-edit.svg" alt="" /> 
                                    <img src="/assets/image/bx-trash.svg" alt="" />
                                </td>
                                
                            </tr>
                   
                        </table>
                </div>
                
            
                

    
            </div>
        </div>
    )
}