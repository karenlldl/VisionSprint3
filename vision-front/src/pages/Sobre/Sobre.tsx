const Sobre = () => {
  return (
    <>
      <section className="banner-sobre">
        <img
          src="/img/foto_sobre (1).png"
          alt="Imagem em preto e branco representando o projeto Vision"
        />
      </section>
      <main className="flex flex-wrap items-center justify-center bg-[#BABF34] text-white px-[10%] py-20 gap-10">
        <div className="flex-1 min-w-300px max-w-600px text-lg leading-relaxed">
          <p>
            A <strong>Vision</strong> é uma empresa criada para transformar a
            forma como a <strong>Turma do Bem</strong> conecta pessoas,
            voluntários e beneficiários. O projeto nasceu a partir do{" "}
            <strong>Challenge FIAP 2025</strong>, com o propósito de unir{" "}
            <strong>tecnologia, empatia e impacto social</strong>.
          </p>
          <p className="mt-4">
            A plataforma propõe um{" "}
            <strong>sistema integrado de gestão e atendimento</strong>, com
            recursos como <strong>chatbot por comando de voz</strong>,{" "}
            <strong>geolocalização</strong> e{" "}
            <strong>priorização automática de casos por score</strong>,
            garantindo <strong>agilidade</strong> e{" "}
            <strong>transparência</strong> em cada etapa do processo.
          </p>
          <p className="mt-4">
            Desenvolvido com <strong>JAVA</strong>,{" "}
            <strong>REACT/VITE E TYPESCRIPT</strong>, <strong>TAILWIND/CSS</strong> e{" "}
            <strong>APIs do Google Maps</strong>, o projeto segue um{" "}
            <strong>roadmap</strong> que abrange planejamento, desenvolvimento,
            integração, testes e implementação — sempre com foco em{" "}
            <strong>acessibilidade</strong>, <strong>inclusão</strong> e{" "}
            <strong>eficiência</strong>.
          </p>
          <p className="mt-4 font-bold text-white">
            Acreditamos que a tecnologia deve ser usada para{" "}
            <strong></strong>.
          </p>
        </div>
        <div className="flex-1 min-w-250px flex justify-center">
          <img
            src="/img/logo_vision.png"
            alt="Logo Vision Technology"
            className="max-w-300px w-full"
          />
        </div>
        <section className="w-full flex justify-center mt-10">
          <img
            src="/img/roadmap.png"
            alt="Roadmap geral do projeto Vision"
            className="max-w-800px w-full"
          />
        </section>
      </main>
    </>
  );
};
export default Sobre;
