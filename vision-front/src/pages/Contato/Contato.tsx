const Contato = () => {
  return (
    <>
      <section className="banner">
        <img
          src="/img/foto_contato (1).png"
          alt="Imagem ilustrativa da página de contato"
        />
      </section>

      <main>
        <section className="formulario-contato">
          <h1 className="titulo-contato">Fale Conosco</h1>
          <h2>Envie sua mensagem</h2>

          <form
            action="mailto:contato@meuprojeto.com"
            method="POST"
            encType="text/plain"
          >
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows={6} required />

            <button type="submit">Enviar</button>
          </form>
        </section>

        <section className="localizacao">
          <div className="localizacao-conteudo">
            
            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.682438828481!2d-46.63731352477059!3d-23.578938478783777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c35d7aa63d%3A0x41c9e0e14db5b4f8!2sR.%20Maur%C3%ADcio%20Francisco%20Klabin%2C%20449%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004120-020!5e0!3m2!1spt-BR!2sbr!4v1697733123456"
                width="500"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="endereco">
              <h2>Endereço Turma do Bem</h2>
              <p>
                Rua Maurício Francisco Klabin, 449
                <br />
                Vila Mariana, São Paulo - SP
                <br />
                CEP 04120-020
              </p>

              <p>
                <strong>Telefone:</strong> (11) 5084-7276
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;