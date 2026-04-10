import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type LoginFormData = {
  perfil: "beneficiario" | "gestor" | "dentista";
  email: string;
  senha: string;
};

const PaginaLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      perfil: "beneficiario",
      email: "",
      senha: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    if (data.perfil === "beneficiario") {
      navigate("/beneficiario");
      return;
    }

    if (data.perfil === "dentista") {
      navigate("/dentista");
      return;
    }

    if (data.perfil === "gestor") {
      navigate("/gestor");
    }
  };

  return (
    <main className="relative min-h-screen grid place-items-center bg-[linear-gradient(90deg,var(--lime-700)_0_50%,#fff_50%_100%)] p-8 max-[520px]:bg-[linear-gradient(180deg,var(--lime-700)_0_40%,#fff_40%_100%)] max-[520px]:p-4">
      <div className="grid w-full max-w-260 grid-cols-2 overflow-hidden rounded-[22px] bg-(--card-bg) shadow-[0_18px_45px_rgba(0,0,0,0.12)] max-[900px]:grid-cols-1">
        <div className="flex items-center justify-center bg-[linear-gradient(180deg,var(--lime-600),var(--lime-500))] max-[900px]:h-40">
          <img
            src="/img/logo_vision.png"
            alt="Logo Vision"
            className="h-auto w-87.5 drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="flex flex-col justify-center gap-7 bg-white px-7 py-14 md:px-[clamp(28px,6vw,72px)] max-[900px]:px-6 max-[900px]:pb-12 max-[900px]:pt-10">
          <h2 className="text-center text-[26px] font-bold text-(--accent)">
            Bem vindo!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <label htmlFor="perfil" className="text-xs text-(--muted)">
              você é:
            </label>

            <select
              id="perfil"
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pb-3 pt-2 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
              {...register("perfil", { required: "Selecione um perfil" })}
            >
              <option value="beneficiario">Beneficiário</option>
              <option value="gestor">Gestor</option>
              <option value="dentista">Dentista</option>
            </select>
            {errors.perfil && (
              <span className="text-sm text-red-600">{errors.perfil.message}</span>
            )}

            <label htmlFor="email" className="text-xs text-(--muted)">
              seu e-mail
            </label>

            <input
              id="email"
              type="email"
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pb-3 pt-2.5 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
              {...register("email", {
                required: "Informe seu e-mail",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Digite um e-mail válido",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-600">{errors.email.message}</span>
            )}

            <label htmlFor="senha" className="text-xs text-(--muted)">
              sua senha
            </label>

            <input
              id="senha"
              type="password"
              className="border-0 border-b-2 border-b-[#d6d6d6] bg-transparent px-0 pb-3 pt-2.5 text-[15px] outline-none transition-colors duration-200 focus:border-b-(--accent)"
              {...register("senha", {
                required: "Informe sua senha",
                minLength: {
                  value: 6,
                  message: "A senha deve ter no mínimo 6 caracteres",
                },
              })}
            />
            {errors.senha && (
              <span className="text-sm text-red-600">{errors.senha.message}</span>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-(--accent) px-5 py-3 text-[15px] font-semibold text-white transition duration-200 hover:brightness-105 max-[520px]:w-full max-[520px]:justify-center"
            >
              <span>➜</span>
              Entrar
            </button>
          </form>

          <p className="text-center text-[13px] text-(--muted)">
            Não tem uma conta ainda?{" "}
            <Link
              to="/cadastro"
              className="border-b border-b-transparent text-(--accent) no-underline hover:border-b-current"
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