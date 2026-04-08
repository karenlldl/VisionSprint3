const Faq = () => {
  return (
    <>
      <section className="banner">
        <img
          src="/img/foto_faq_att (1).png"
          alt="Imagem ilustrativa de perguntas frequentes"
        />
      </section>

      <main>
        <section className="faq-container">
          <h1 className="faq-titulo">Perguntas Frequentes</h1>

          <div className="faq">
            <div className="pergunta">
              <h3>O que é a Vision e qual é a parceria com a Turma do Bem?</h3>
              <p>
                A Vision é uma empresa de tecnologia social que desenvolveu o
                sistema que conecta beneficiários, voluntários e escolas parceiras
                da Turma do Bem em uma única plataforma digital.
              </p>
            </div>

            <div className="pergunta">
              <h3>
                Como posso me cadastrar para receber atendimento odontológico
                gratuito?
              </h3>
              <p>
                Basta acessar a aba “Entre ou Cadastre-se” no menu e preencher o
                formulário inicial. O sistema indicará automaticamente a escola ou
                dentista parceiro mais próximo de você.
              </p>
            </div>

            <div className="pergunta">
              <h3>Sou dentista, como posso me tornar voluntário da Turma do Bem?</h3>
              <p>
                No mesmo botão de cadastro, selecione “Sou dentista voluntário” e
                complete o formulário. Nossa equipe fará a validação e enviará os
                próximos passos por e-mail.
              </p>
            </div>

            <div className="pergunta">
              <h3>Como o sistema define quem tem prioridade no atendimento?</h3>
              <p>
                O sistema utiliza um algoritmo de pontuação social (score), que
                considera critérios como idade, renda, condição dentária e
                proximidade geográfica — sempre com o objetivo de garantir justiça
                e transparência.
              </p>
            </div>

            <div className="pergunta">
              <h3>O chatbot da plataforma substitui o atendimento humano?</h3>
              <p>
                Não. Ele foi criado para auxiliar pessoas analfabetas e/ou com
                dificuldades com dispositivos eletrônicos, além de agilizar a
                triagem e tirar dúvidas iniciais, mas todo atendimento e
                acompanhamento são realizados por pessoas reais e voluntários da
                ONG.
              </p>
            </div>

            <div className="pergunta">
              <h3>Posso acompanhar o andamento do meu caso depois do cadastro?</h3>
              <p>
                Sim! Após o login, você tem acesso ao seu painel individual, onde
                é possível ver o status da triagem, próximos passos e atualizações
                do tratamento.
              </p>
            </div>

            <div className="pergunta">
              <h3>
                O sistema é acessível para pessoas com deficiência visual ou
                auditiva?
              </h3>
              <p>
                Sim. A Vision desenvolveu o site com comandos de voz, contraste de
                cores, leitura de tela e chatbot com suporte em Libras, garantindo
                inclusão digital.
              </p>
            </div>

            <div className="pergunta">
              <h3>Como funciona o mapa de geolocalização dos atendimentos?</h3>
              <p>
                O sistema cruza automaticamente o endereço do beneficiário com o
                das escolas e dentistas cadastrados, mostrando as opções mais
                próximas e disponíveis.
              </p>
            </div>

            <div className="pergunta">
              <h3>Minhas informações estão seguras no sistema?</h3>
              <p>
                Sim. Todos os dados são armazenados de forma criptografada,
                seguindo a Lei Geral de Proteção de Dados (LGPD) e políticas
                internas de segurança da Vision.
              </p>
            </div>

            <div className="pergunta">
              <h3>Como posso contribuir com o projeto?</h3>
              <p>
                Você pode participar como voluntário, fazer doações financeiras ou
                divulgar o projeto. Cada pequena ação ajuda a multiplicar o bem e
                transformar mais sorrisos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;