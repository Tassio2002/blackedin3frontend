import React from 'react';

import '../assets/css/styles.css';
import CadButton from '../../../PublicComponents/CadButton';
const Form = () => {
    return ( 
        <main id="bg-cad-profissional">
                <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                    <div id="form-container" className="row">
                        <div id="cad-img-profissional" className="col-md-6"></div>
                        <div id="border-cadastro" className="col d-flex flex-column justify-content-justify">                  
                            <form>
                                <h2>Cadastro profissional</h2>
                                <br/>

                                <label>Nome</label>
                                <input id="nome" className="form-control" type="text" required />
                                <br/>

                                <label>Email</label>
                                <input id="email" className="form-control" type="email" required />
                                <br/>

                                <label>Senha (min. 8 caracteres)</label>
                                <input id="senha" className="form-control" type="password" minlength="8" required autocomplete="current-password"/>
                                <br/>

                                <label>Data de nascimento</label>
                                <input id="dataNascimento" className="form-control" type="date" required />
                                <br/>

                                <label>Endereço</label>
                                <input id="endereco" className="form-control" type="text" required />
                                <br/>

                                <label>Escolaridade</label>
                                <select id="escolaridade" className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                    <option selected>Selecione</option>
                                    <option value="1">Ensino médio Incompleto</option>
                                    <option value="2">Ensino médio Completo</option>
                                    <option value="3">Ensino superior Incompleto</option>
                                    <option value="4">Ensino superior Completo</option>
                                </select>
                                <br/>

                                <label>Telefone com DDD (somente números)</label>
                                <input id="telefone" className="form-control" type="text" required />
                                <br/>

                                <label>Área de interesse</label>
                                <select id="areaInteresse" className="form-select form-select-md mb-3" aria-label=".form-select-lg example" required>
                                    <option selected>Selecione</option>
                                    <option value="1">Tecnologia</option>
                                    <option value="2">Letras/Idioma</option>
                                    <option value="3">Humanas</option>
                                    <option value="4">Exatas</option>
                                    <option value="5">Biologia</option>
                                    <option value="6">Engenharia</option>
                                </select>

                                <label>Experiência</label>
                                <textarea id="experiencias" className="form-control" placeholder="Escreva aqui suas experiências profissionais" ></textarea>
                                <br/>

                                <label>Competências (separe por vírgula)</label>
                                <textarea id="competencias" className="form-control" placeholder="ex: Comunicativo, Photoshop, Banco de dados" ></textarea>
                                <br/>
                                <CadButton />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
     );
}
 
export default Form;