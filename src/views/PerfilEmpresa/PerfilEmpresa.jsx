import React from 'react';
import Perfil from './components/Perfil';
import PerfilData from './components/PerfilData';
import './assets/css/styles.css'

const PerfilEmpresa = () => {
    return ( 
        <div>

            <div class="pag-perfil">
                 <div class="card-perfil">
                    <div class="container-fluid container-dados-perfil">
                    <div class="row">
                        <Perfil />
                        <PerfilData />  
                    </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default PerfilEmpresa;

