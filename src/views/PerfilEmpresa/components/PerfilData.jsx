import React from 'react';

const PerfilData = () => {
    return ( 
        <div>

            <div class="col-sm p-4">
                    <h6>Nome da Empresa </h6>
                    <p id="nome_empresa">Itau</p>
            
                    <h6>CNPJ </h6>
                    <p id="CNPJ">112222345/09765</p>
            
                    <h6>Email </h6>
                    <p id="email_empresa">empresa@itau.com</p>

                    <h6>Senha </h6>
                    <p id="senha">**********</p>
            
                    <h6>Razão Social </h6>
                    <p id="razão_social">Itau S.A</p>
    
            </div>

            <div class="col-sm p-4">

                <h6>Porte da Empresa </h6>
                <p id="porte_empresa">Grande</p>
          
                <h6>Área de Atuação </h6>
                <p id="area_atuacao">Tecnologia</p>

                <h6>Modelo de Trabalho </h6>
                <p id="modelo_trabalho">Hibrido</p>
          
                <h6>Descrição </h6>
                <p id="descricao">Itaú Unibanco, também conhecido como Itaú, é o maior banco brasileiro, com sede na cidade de São Paulo, no estado homônimo.</p>
          
            </div>

        </div>

    );
}

export default PerfilData;