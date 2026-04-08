const Sobre = () => {
  return (
    <>
      <section className="banner-sobre">
        <img
          src="/img/foto_sobre (1).png"
          alt="Imagem em preto e branco representando o projeto Vision"
        />
      </section>

      <main className="conteudo-sobre">
        
        <div className="texto-sobre">
          <p>
            A <strong>Vision</strong> é uma empresa criada para transformar a forma como a{" "}
            <strong>Turma do Bem</strong> conecta pessoas, voluntários e beneficiários.
            O projeto nasceu a partir do <strong>Challenge FIAP 2025</strong>, com o propósito de unir{" "}
            <strong>tecnologia, empatia e impacto social</strong>.
          </p>

          <p>
            A plataforma propõe um{" "}
            <strong>sistema integrado de gestão e atendimento</strong>, com recursos como{" "}
            <strong>chatbot por comando de voz</strong>, <strong>geolocalização</strong> e{" "}
            <strong>priorização automática de casos por score</strong>, garantindo{" "}
            <strong>agilidade</strong> e <strong>transparência</strong> em cada etapa do processo.
          </p>

          <p>
            Desenvolvido com <strong>Python</strong>, <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>APIs do Google Maps</strong>, o projeto segue um <strong>roadmap</strong> que abrange{" "}
            planejamento, desenvolvimento, integração, testes e implementação — sempre com foco em{" "}
            <strong>acessibilidade</strong>, <strong>inclusão</strong> e <strong>eficiência</strong>.
          </p>

          <p className="destaque">
            Acreditamos que a tecnologia deve ser usada para{" "}
            <strong>aproximar pessoas e multiplicar o bem</strong>.
          </p>
        </div>

        <div className="logo-vision">
          <img
            src="/IMAGEM/logo_vision.png"
            alt="Logo Vision Technology"
          />
        </div>

        <section className="roadmap">
          <img
            src="/IMAGEM/roadmap.png"
            alt="Roadmap geral do projeto Vision"
          />
        </section>

      </main>
    </>
  );
};

export default Sobre;