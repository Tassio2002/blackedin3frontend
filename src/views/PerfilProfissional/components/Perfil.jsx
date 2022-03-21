import React from 'react';
import ImgProfissional from '../assets/img/1.jpg';

const Perfil = () => {
    return ( 
        <>

                <div class="col-sm p-4">
                    <div id="cor-perfil-profissional" class="container-fluid p-2 text-center head-perfil">
                        {/*<img src={ImgProfissional} alt="Foto Perfil Profissional" />*/}
                        <h1 id="nome">Nathália Sobrenome</h1>
                        <p>Perfil do Profissional</p> 
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
                       
                   
        </>
     );
}
 
export default Perfil;