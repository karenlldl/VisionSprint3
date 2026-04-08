import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <header className="bg-[#FCFF9F] flex items-center justify-between px-10 py-4.5 flex-wrap">
      
    <div>
        <Link to="/">
            <img
                src="/img/LOGOTDB.png"
                alt="Logo ONG Turma do Bem"
                className="h-12.5"
        />
        </Link>
    </div>

      <button className="hidden bg-transparent border-none text-[28px] cursor-pointer text-[#4e7c11]">
        ☰
      </button>

      <nav>
        <ul className="flex gap-6.25 list-none">

        <li>
            <Link
                to="/sobre"
                className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
            >
            Sobre
            </Link>
        </li>

          <li>
            <Link
              to="/faq"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
            to="/contato"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
            >
              Contato
            </Link>
          </li>

          <li>
            <Link              
            to="/integrantes"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
            >
              Integrantes
            </Link>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-2.5">
        <img
          src="/img/icone login.png"
          alt="Ícone de login"
          className="w-10 h-10"
        />

        <Link
            to="/login"
          className="text-[#727e24] no-underline font-bold"
        >
          Entre ou <br /> Cadastre-se
        </Link>
      </div>

    </header>
    </>
  );
};

export default Nav;