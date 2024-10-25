import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function TelaCadastrar(){
    return(
        <div className="telacadastrar">
            <div className="protecao">
                <div className="menu">
                    <Cabecalho/>
                </div>


                <div className="direita">
                    <div className="cima">
                        <div className="inputes">
                            <h1>Pesquisa cliente: </h1>
                            <input type="text" placeholder='Digite o nome do cliente ' />
                        </div>
                        <div className="botao">
                            
                              <Link to="/home" >
                              <button> + Adicionar Cliente </button>
                              </Link> 
                            <button> <img src="/assets/image/bx-filter-alt.svg" alt="" /> Mais Filtros </button>
                        </div>
                    </div>

                    <div className="baixo">
                        <table>
                            <tr>
                                <th> </th>
                                <th> Nome Cliente </th>
                                <th>Status</th>
                                <th> Data De Nascimento</th>
                                <th> E-mail </th>
                                <th>Telefone </th>
                                <th> Ações </th>
                            </tr>

                            <tr>
                                <td> </td>
                                <td> Kevillyn Sandes</td>
                                <td> Ativo </td>
                                <td> 01/07/2006 </td>
                                <td> Kevillynsandes07@gmail.com</td>
                                <td> (11) 978471285 </td>
                                <td> <img src="/assets/image/bx-edit.svg" alt="" /> 
                                    <img src="/assets/image/bx-message-alt-minus.svg" alt="" />
                                </td>
                                
                            </tr>
                   
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}