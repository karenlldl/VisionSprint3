import { Link } from "react-router-dom";

const PaginaLogin = () => {
  return (
    <main className="relative min-h-screen grid place-items-center p-8 max-[520px]:p-4 bg-[linear-gradient(90deg,var(--lime-700)_0_50%,#fff_50%_100%)] max-[520px]:bg-[linear-gradient(180deg,var(--lime-700)_0_40%,#fff_40%_100%)]">
      <div className="w-full max-w-260 bg-(--card-bg) rounded-[22px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] grid grid-cols-2 overflow-hidden max-[900px]:grid-cols-1">
        <div className="bg-[linear-gradient(180deg,var(--lime-600),var(--lime-500))] flex items-center justify-center max-[900px]:h-40">
          <img
            src="/img/logo_vision.png"
            alt="Logo Vision"
            className="w-87.5 h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="bg-white px-7 py-14 md:px-[clamp(28px,6vw,72px)] flex flex-col justify-center gap-7 max-[900px]:px-6 max-[900px]:pt-10 max-[900px]:pb-12">
          <h2 className="text-center text-(--accent) text-[26px] font-bold">
            Bem vindo!
          </h2>

          <form id="formLogin" className="grid gap-4" action="" method="get">
            <label htmlFor="perfil" className="text-xs text-(--muted)">
              você é:
            </label>

            <select
              id="perfil"
              name="perfil"
              required
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pt-2 pb-3 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
            >
              <option value="" disabled defaultValue="">
                Selecione...
              </option>
              <option value="beneficiario">Beneficiário</option>
              <option value="gestor">Gestor</option>
              <option value="dentista">Dentista</option>
            </select>

            <label htmlFor="email" className="text-xs text-(--muted)">
              seu e-mail
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pt-2.5 pb-3 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
            />

            <label htmlFor="senha" className="text-xs text-(--muted)">
              sua senha
            </label>

            <input
              id="senha"
              type="password"
              name="senha"
              required
              minLength={6}
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pt-2.5 pb-3 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
            />

            <button
              type="submit"
              className="mt-2 border-0 bg-(--accent) text-white px-5.5 py-3 rounded-full font-semibold text-[15px] w-fit inline-flex items-center gap-2.5 transition duration-200 hover:brightness-105 max-[520px]:w-full max-[520px]:justify-center"
            >
              <span>➜</span>
              Entrar
            </button>
          </form>

          <p className="text-[13px] text-(--muted) text-center">
            Não tem uma conta ainda?{" "}
            <Link
              to="/cadastro"
              className="text-(--accent) no-underline border-b border-b-transparent hover:border-b-current"
            >
              Clique aqui.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PaginaLogin;