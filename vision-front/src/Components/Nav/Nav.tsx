import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FCFF9F] flex items-center justify-between px-10 py-4.5 flex-wrap relative">
      <div>
        <Link to="/">
          <img
            src="/img/LOGOTDB.png"
            alt="Logo ONG Turma do Bem"
            className="h-12.5"
          />
        </Link>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="block md:hidden bg-transparent border-none text-[28px] cursor-pointer text-[#4e7c11]"
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`${open ? "block" : "hidden"} w-full md:w-auto md:block`}>
        <ul className="flex flex-col items-center gap-4 mt-4 list-none md:flex-row md:gap-6.25 md:mt-0">
          <li>
            <Link
              to="/sobre"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              to="/faq"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              to="/contato"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </li>

          <li>
            <Link
              to="/integrantes"
              className="no-underline text-[#4e7c11] font-semibold transition duration-300 hover:text-[#d6e76b]"
              onClick={() => setOpen(false)}
            >
              Integrantes
            </Link>
          </li>
        </ul>
      </nav>

      <div className="w-full flex justify-center mt-2.5 md:w-auto md:mt-0 md:flex md:items-center md:gap-2.5">
        <img
          src="/img/icone login.png"
          alt="Ícone de login"
          className="w-10 h-10"
        />

        <Link
          to="/login"
          className="text-[#727e24] no-underline font-bold"
          onClick={() => setOpen(false)}
        >
          Entre ou <br /> Cadastre-se
        </Link>
      </div>
    </header>
  );
};

export default Nav;