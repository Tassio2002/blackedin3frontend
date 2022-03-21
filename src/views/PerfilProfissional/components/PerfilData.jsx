import React from 'react';

const PerfilData = () => {
    return (
        <>
            <div class="col-sm p-4 perfil-data">
                <h6>Nome </h6>
                <p id="nome">Nathália Sobrenome</p>
          
                <h6>Email </h6>
                <p id="email">nathalia_teste@email.com</p>
          
                <h6>Senha </h6>
                <p id="senha">**********</p>
          
                <h6>Data de Nascimento </h6>
                <p id="data_nascimento">31/02/1996</p>
          
                <h6>Endereço </h6>
                <p id="endereco">Rua Tal, 33</p>
          
                <h6>Escolaridade </h6>
                <p id="escolaridade">Ensino médio completo</p>
          
              </div>
              
              <div class="col-sm p-4 perfil-data">
                <h6>Telefone </h6>
                <p id="telefone">21988887777</p>
          
                <h6>Experiência </h6>
                <p id="experiencia">Não possui</p>
          
                <h6>Competências </h6>
                <p id="competencias">Java, Visual Studio Code, C#, Front-end (HTML e CSS)</p>
          
                <h6>Área de interesse </h6>
                <p id="area_interesse">Tecnologia</p>
          
                <h6>Sobre mim </h6>
                <p id="descricao">Sou Formada como técnica em sistemas da informação, atualmente graduanda em Engenharia de software, tenho conhecimento em ReactJS, NodeJs, postgreeSQL e Git.</p>
                
              </div>

        </>
    );
}

export default PerfilData;

