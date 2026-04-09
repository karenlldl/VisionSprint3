const Integrantes = () => {
  return (
    <>
      <section className="w-full h-70 md:h-105 overflow-hidden">
        <img
          src="/img/header-integrantes.png"
          alt="img com a logo da Vision - Integrantes"
          className="w-full h-full object-cover"
        />
      </section>

      <main>
        <section className="text-center my-15 mb-7.5">
          <h2 className="text-[#607a1e] font-extrabold text-[24px] md:text-[36px]">
            <strong>Quem somos</strong>
          </h2>
        </section>

        <section className="flex flex-wrap justify-center gap-15 px-[5%] pt-5 pb-20">
          <div className="text-center">
            <img
              src="/img/imagem-integrante-denise.jpeg"
              alt="Foto de Denise Santos"
              className="w-45 h-45 rounded-full border-[5px] border-[#b5cf36] object-cover mb-[15px] mx-auto"
            />
            <h3 className="text-[#607a1e] text-[18px] font-bold uppercase">
              DENISE SANTOS
            </h3>
            <p>
              <strong>RM:</strong> 567559
            </p>
            <p>
              <strong>Turma:</strong> 1TDSPA
            </p>
            <div className="mt-3 flex justify-center gap-3">
              <a
                href="https://github.com/Denise-ss"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/XXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center">
            <img
              src="/img/imagem-integrante-henrique.jpeg"
              alt="Foto de Henrique Bagueixe"
              className="w-45 h-45 rounded-full border-[5px] border-[#b5cf36] object-cover mb-[15px] mx-auto"
            />
            <h3 className="text-[#607a1e] text-[18px] font-bold uppercase">
              HENRIQUE BAGUEIXE
            </h3>
            <p>
              <strong>RM:</strong> 568292
            </p>
            <p>
              <strong>Turma:</strong> 1TDSPA
            </p>
            <div className="mt-3 flex justify-center gap-3">
              <a
                href="https://github.com/HenriqueBagueixe"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/henrique-bagueixe"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center">
            <img
              src="/img/imagem-integrante-karen.jpeg"
              alt="Foto de Karen Cardoso"
              className="w-45 h-45 rounded-full border-[5px] border-[#b5cf36] object-cover mb-[15px] mx-auto"
            />
            <h3 className="text-[#607a1e] text-[18px] font-bold uppercase">
              KAREN CARDOSO
            </h3>
            <p>
              <strong>RM:</strong> 566870
            </p>
            <p>
              <strong>Turma:</strong> 1TDSPA
            </p>
            <div className="mt-3 flex justify-center gap-3">
              <a
                href="https://github.com/karenlldl"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/karenlldlira/"
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline bg-[#b5cf36] text-white font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-[#607a1e] hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Integrantes;
