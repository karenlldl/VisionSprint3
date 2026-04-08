const Integrantes = () => {
  return (
    <>
      <section className="banner">
        <img
          src="/IMAGEM/header-integrantes.png"
          alt="Imagem com a logo da Vision - Integrantes"
        />
      </section>

      <main>
        <section className="quem-somos">
          <h2>
            <strong>Quem somos</strong>
          </h2>
        </section>

        <section className="integrantes">
          
          <div className="integrante">
            <img
              src="/IMAGEM/imagem-integrante-denise.jpeg"
              alt="Foto de Denise Santos"
            />
            <h3>DENISE SANTOS</h3>
            <p><strong>RM:</strong> 567559</p>
            <p><strong>Turma:</strong> 1TDSPA</p>
            <p className="links">
              <a href="https://github.com/Denise-ss" target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href="https://linkedin.com/in/XXXX" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="integrante">
            <img
              src="/IMAGEM/imagem-integrante-henrique.jpeg"
              alt="Foto de Henrique Bagueixe"
            />
            <h3>HENRIQUE BAGUEIXE</h3>
            <p><strong>RM:</strong> 568292</p>
            <p><strong>Turma:</strong> 1TDSPA</p>
            <p className="links">
              <a href="https://github.com/HenriqueBagueixe" target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/henrique-bagueixe" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="integrante">
            <img
              src="/IMAGEM/imagem-integrante-karen.jpeg"
              alt="Foto de Karen Cardoso"
            />
            <h3>KAREN CARDOSO</h3>
            <p><strong>RM:</strong> 566870</p>
            <p><strong>Turma:</strong> 1TDSPA</p>
            <p className="links">
              <a href="https://github.com/karenlldl" target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/karenlldlira/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>

        </section>
      </main>
    </>
  );
};

export default Integrantes;