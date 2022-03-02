/*
NÃO CONSEGUE IMPORTAR A IMAGEM
*/

import React from 'react';
//import img from './assets/img/itau.png';
//import ImgEmpresa from './assets/img/itau.jpg'

const Perfil = () => {
    return ( 
                    <div class="row">
                        <div class="col-sm p-4">
                            <div id="cor-perfil-empresa" class="container-fluid p-2 text-center head-perfil">

                                {/*<img  src={ImgEmpresa} alt="Foto Perfil Empresa"/>*/}
                                <h1 id="nome_empresa">Itau</h1>
                                <p>Perfil da Empresa</p> 
                                <a href="#editar">
                                    <button class="btn-perfil-editar">Editar perfil</button>
                                </a>

                                <a href="#lista">
                                    <button class="btn-perfil-lista">Ver dados em lista</button>
                                </a>

                                <a href="#deletar">
                                    <button class="btn-perfil-deletar">Deletar conta</button>
                                </a>

                            </div>
                        </div>
                       
                    </div>

     );
}
 
export default Perfil;