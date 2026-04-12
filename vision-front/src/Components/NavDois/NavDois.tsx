import { Link, useNavigate } from "react-router-dom";

// aqui definimos o tipo das props
type NavDoisProps = {
  nome: string;
  mostrarDr?: boolean;
  onMenuClick?: () => void;
};

const NavDois = ({
  nome,
  mostrarDr = false,
  onMenuClick,
}: NavDoisProps) => {
  const navigate = useNavigate();

  // função de sair
  const handleLogout = () => {
    alert("Saindo da conta...");
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between bg-[#f78b1f] px-4 py-4 text-white md:px-8">
      
      {/* botão menu (mobile) */}
      <button
        onClick={onMenuClick}
        className="mr-3 text-2xl md:hidden"
      >
        ☰
      </button>

      {/* logo */}
      <div>
        <Link to="/">
          <img
            src="/img/logo-turma-do-bem-branca.png"
            alt="Logo Turma do Bem"
            className="h-12"
          />
        </Link>
      </div>

      {/* nome + botão sair */}
      <div className="flex items-center gap-2.5">
        <p>
          Olá, <b>{mostrarDr ? `Dr. ${nome}` : nome}</b>
        </p>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-white px-3 py-1.5 font-semibold text-[#f78b1f] hover:bg-[#ffe0b2]"
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default NavDois;