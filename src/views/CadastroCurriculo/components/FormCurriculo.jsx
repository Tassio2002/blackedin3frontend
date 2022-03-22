import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import curriculoService from '../../../services/curriculo.service';

const FormCurriculo = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveCurriculo = (c) => {
        c.preventDefault();

        const curriculo = { nome, email, senha, data_nascimento, id };
        if (id) {
            //update
            curriculoService.update(curriculo)
                .then(response => {
                    alert('Curriculo editado', response.data);
                    navigate('/Curriculo');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            curriculoService.create(curriculo)
                .then(response => {
                    //trocar por alert
                    alert('Curriculo adicionado', response.data);
                    navigate('/Curriculo');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            curriculoService.get(id)
                .then(curriculo => {
                    setNome(curriculo.data.nome);
                    setEmail(curriculo.data.email);
                    setSenha(curriculo.data.senha);
                    setData_nascimento(curriculo.data.data_nascimento);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])

    return (
        <main id="bg-cad-curriculo">
            <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" className="row">
                    <div id="cad-img-curriculo" className="col-md-6"></div>
                    <div id="border-cadastro" className="col d-flex flex-column justify-content-justify">
                        <form>
                            <h2>Cadastro curriculo</h2>

                            <label>E</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={nome}
                                onChange={(c) => setNome(c.target.value)}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(c) => setEmail(c.target.value)}
                                required
                            />

                            <label>Senha (min. 8 caracteres)</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                minlength="8"
                                autocomplete="current-password"
                                value={senha}
                                onChange={(c) => setSenha(c.target.value)}
                                required
                            />

                            <label>Data de nascimento</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataNascimento"
                                value={data_nascimento}
                                onChange={(c) => setData_nascimento(c.target.value)}
                                required
                            />

                            <div id="btn-form" class="d-flex">
                            <button id="btn-cadastrar" className="btn-save px-4 py-2" onClick={(c) => saveCurriculo(c)}>Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormCurriculo;