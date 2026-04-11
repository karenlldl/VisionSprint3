<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069

type NavDoisProps = {
  nome: string;
  mostrarDr?: boolean;
  onMenuClick?: () => void;
};

const NavDois = ({ nome, mostrarDr = false, onMenuClick }: NavDoisProps) => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Saindo da conta...");
    navigate("/");
=======

  const navigate = useNavigate();

  const handleLogout = () => {
  alert("Saindo da conta...");
  navigate("/");
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
  };

  return (
    <header className="flex items-center justify-between bg-[#f78b1f] px-4 py-4 text-white md:px-8">
<<<<<<< HEAD
      <button onClick={onMenuClick} className="mr-3 text-2xl md:hidden">
=======
      <button
        onClick={onMenuClick}
        className="mr-3 text-2xl md:hidden"
      >
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
        ☰
      </button>

      <div>
<<<<<<< HEAD
        <Link to="/">
=======
        <a href="/">
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
          <img
            src="/img/logo-turma-do-bem-branca.png"
            alt="Logo Turma do Bem"
            className="h-12"
          />
<<<<<<< HEAD
        </Link>
=======
        </a>
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
      </div>

      <div className="flex items-center gap-2.5">
        <p className="m-0">
          Olá, <b>{mostrarDr ? `Dr. ${nome}` : nome}</b>
        </p>

        <button
<<<<<<< HEAD
          onClick={handleLogout}
          className="cursor-pointer rounded-lg bg-white px-3 py-1.5 font-semibold text-[#f78b1f] transition duration-300 hover:bg-[#ffe0b2]"
        >
          Sair
        </button>
=======
      onClick={handleLogout}
      className="cursor-pointer rounded-lg bg-white px-3 py-1.5 font-semibold text-[#f78b1f] transition duration-300 hover:bg-[#ffe0b2]"
      >
      Sair
    </button>
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
      </div>
    </header>
  );
};

export default NavDois;