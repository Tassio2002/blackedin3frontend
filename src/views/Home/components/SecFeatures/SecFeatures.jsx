import React from 'react';

const SecFeatures = () => {
    return (
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Funcionalidades</h2>
                <p class="text-center">Trouxemos algumas funcionalidades já conhecidas em redes de relacionamentos, mas que ganharam um novo propósito aqui no BlackedIn.</p>
                <h2 class="text-center">Profissionais</h2>
            </div>
            <div class="row justify-content-center features">
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class="bi bi-geo-alt-fill icon"></i>
                        <h3 class="name">Busca por localidade</h3>
                        <p class="description">Faça buscas personalizadas por empresas na sua região ou ainda aplique para trabalhos remotos.</p>
                        <a class="learn-more" href="*">saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class="bi bi-heart-fill icon"></i>
                        <h3 class="name">Sistema de match</h3>
                        <p class="description">A plataforma traz a inovação do sistema de match entre os profissionais e as empresas. Aproximando os contratantes e contratados</p>
                        <a class="learn-more" href="*">saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class="bi bi-bar-chart-fill icon"></i>
                        <h3 class="name">Aprimore-se</h3>
                        <p class="description">Conheça também nossa gama de cursos profissionalizantes com certificado, melhore tanto suas hard-skills como suas soft-skills.</p>
                        <a class="learn-more" href="*">saiba mais »</a>
                    </div>
                </div>


                <h2 class="text-center">Empresas</h2>

            </div>
            <div class="row justify-content-center features">
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class='bi bi-people-fill icon-2'></i>
                        <h3 class="name">Banco de talentos</h3>
                        <p class="description">Realize buscas personalizadas em nosso bancos de talentos que estão esperando para fazer a diferença na sua empresa.</p>
                        <a class="learn-more" href="*">saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class="bi bi-heart-fill icon-2"></i>
                        <h3 class="name">Sistema de match</h3>
                        <p class="description">Ache o profissional ideal pra sua vaga! Experimente nosso sistema de match que coloca sua empresa diretamente em contato com os profissionais da sua escolha.</p>
                        <a class="learn-more" href="*">saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box">
                        <i class="bi bi-telephone-fill icon-2"></i>
                        <h3 class="name">Suporte 24/7</h3>
                        <p class="description">Temos suporte 24 horas por dia, 7 dias na semana, contate-nos sempre que precisar de algo.</p>
                        <a class="learn-more" href="*">saiba mais»</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecFeatures;