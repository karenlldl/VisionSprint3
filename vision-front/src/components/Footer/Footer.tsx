const Footer = () => {
  return (
    <footer className="bg-[#BABF34] text-white px-[10%] py-7.5 flex flex-wrap items-center justify-between gap-5 text-center">
      
      <div className="rodape-esquerda">
        <img
          src="/img/logo-turma-do-bem-branca.png"
          alt="Logo branco Turma do Bem"
        />
        <p>Você pode ser o melhor dentista do mundo</p>
      </div>

      <div className="container-rodape-meio">
        <div className="flex items-center justify-center">
          
          <a href="https://www.facebook.com/turmadobem/?locale=pt_BR">
            <img
              src="/img/logo-facebook.png"
              alt="Facebook"
              className="w-9.5 mx-2.5 transition-transform duration-300 hover:scale-[1.15]"
            />
          </a>

          <a href="https://www.instagram.com/ongturmadobem/">
            <img
              src="/img/logo-instagram.png"
              alt="Instagram"
              className="w-9.5 mx-2.5 transition-transform duration-300 hover:scale-[1.15]"
            />
          </a>

          <a href="https://www.linkedin.com/company/turma-do-bem?originalSubdomain=br">
            <img
              src="/img/logo_linkedin (2).png"
              alt="LinkedIn"
              className="w-9.5 mx-2.5 transition-transform duration-300 hover:scale-[1.15]"
            />
          </a>

          <a href="https://x.com/turmadobem">
            <img
              src="/img/logo-twitter.png"
              alt="Twitter"
              className="w-9.5 mx-2.5 transition-transform duration-300 hover:scale-[1.15]"
            />
          </a>

        </div>
      </div>

      <div className="rodape-direita">
        <a
          href="/paginaLogin"
          className="bg-[#f78b1f] text-white px-6.25 py-3 rounded-[10px] font-bold cursor-pointer transition duration-300 hover:bg-[#ffd28a] hover:text-[#333]"
        >
          Quero fazer parte
        </a>
      </div>

    </footer>
  );
};

export default Footer;