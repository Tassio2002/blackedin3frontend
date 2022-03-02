import React from 'react';

import CadButton from '../../../PublicComponents/CadButton';
const FormEmpresa = () => {
    return (
        <main id="bg-cad-empresa">
            <div id="container-cadastro" class="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" class="row">
                    <div id="cad-img-empresa" class="col-md-6"></div>
                    <div id="border-cadastro" class="col d-flex flex-column justify-content-center">
                        <form>
                            <h2>Cadastro empresa</h2>
                            <br />

                            <label>Nome da Empresa</label>
                            <input id="nome" class="form-control" type="text" required />
                            <br />

                            <label>CNPJ (somente números)</label>
                            <input id="CNPJ" class="form-control" type="text" required />
                            <br />

                            <label>E-mail da Empresa</label>
                            <input id="email" class="form-control" type="email" required />
                            <br />

                            <label>Razão Social</label>
                            <input id="razaoSocial" class="form-control" type="text" required />
                            <br />

                            <label>Porte da Empresa</label>
                            <select id="porte" class="form-select form-select-md mb-3" aria-label=".form-select-lg example" required>
                                <option selected>Selecione</option>
                                <option value="1">Micro / Pequena</option>
                                <option value="2">Média</option>
                                <option value="3">Grande</option>
                            </select>
                            <br />

                            <label>Área de atuação</label>
                            <select id="areaAtuacao" class="form-select form-select-md mb-3" aria-label=".form-select-lg example" required>
                                <option selected>Selecione</option>
                                <option value="1">Tecnologia</option>
                                <option value="2">Letras/Idioma</option>
                                <option value="3">Humanas</option>
                                <option value="4">Exatas</option>
                                <option value="5">Biologia</option>
                                <option value="6">Engenharia</option>
                            </select>
                            <br />

                            <label class="d-block">Qual modelo de trabalho oferece?</label>
                            <select id="modeloTrabalho" class="form-select form-select-md mb-3" aria-label=".form-select-lg example" required>
                                <option selected>Selecione</option>
                                <option value="1">Presencial</option>
                                <option value="2">Remoto</option>
                                <option value="3">Hibrido</option>
                            </select>
                            <br />

                            <label>Senha (min. 8 caracteres)</label>
                            <input id="senha" class="form-control" type="password" minlength="8" required autocomplete="current-password" />
                            <br />

                            <label>Descrição</label>
                            <textarea id="descricao" class="form-control" placeholder="Escreva aqui uma breve descrição sobre a empresa" required></textarea>
                            <br />
                            <CadButton />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormEmpresa;