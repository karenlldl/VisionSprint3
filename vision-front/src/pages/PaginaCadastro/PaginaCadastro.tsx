import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type CadastroFormData = {
  tipo: "paciente" | "voluntario";
  nome: string;
  rg?: string;
  cpf?: string;
  nascimento?: string;
  endereco?: string;
  cidade?: string;
  cep?: string;
  complemento?: string;
  email: string;
  senha: string;
  cro?: string;
  especialidade?: string;
  disponibilidade?: string;
};

const PaginaCadastro = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroFormData>({
    defaultValues: {
      tipo: "paciente",
    },
  });

  const tipoSelecionado = watch("tipo");

  const onSubmit = (data: CadastroFormData) => {
    alert("Cadastro realizado com sucesso! Entraremos em contato.");

    console.log("Cadastro enviado:", data);

    navigate("/");
  };

  return (
    <div className="grid min-h-screen place-items-center bg-[linear-gradient(90deg,var(--lime-700)_0_50%,#fff_50%)] p-8 max-[900px]:p-6">
      <div className="grid w-full max-w-270 grid-cols-[300px_1fr] overflow-hidden rounded-[22px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.12)] max-[900px]:grid-cols-1">
        <aside className="flex flex-col items-start justify-center gap-7 bg-[linear-gradient(180deg,var(--lime-600),var(--lime-500))] px-7 py-10 max-[900px]:items-center max-[900px]:text-center">
          <img
            src="/img/logo_vision.png"
            alt="Vision Technology"
            className="h-auto w-67.5 drop-shadow-[0_1px_0_rgba(0,0,0,0.1)]"
          />

          <p className="text-[28px] font-light leading-[1.2] text-white max-[900px]:text-[24px]">
            Precisa de ajuda
            <br />
            para se <span className="font-bold italic">cadastrar</span>?
          </p>

          <a
            className="inline-block rounded-full bg-white px-5 py-3 font-bold text-(--accent) no-underline shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
            href="#"
          >
            Clique aqui
          </a>
        </aside>

        <section className="bg-white px-6 py-10 md:px-[clamp(24px,5vw,64px)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-2 grid justify-items-center gap-2.5 max-[900px]:justify-items-stretch">
              <label className="text-[14px] text-(--muted)" htmlFor="tipo">
                Selecione se você é paciente ou voluntário:
              </label>

              <select
                id="tipo"
                className="w-65 appearance-none rounded-[10px] border-2 border-[#e4e4e4] bg-white px-3.5 py-2.5 outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)] max-[900px]:w-full"
                {...register("tipo", { required: "Selecione um tipo" })}
              >
                <option value="paciente">Paciente</option>
                <option value="voluntario">Voluntário</option>
              </select>
            </div>

            <h2 className="my-4 text-[26px] font-bold text-(--accent)">
              Dados pessoais
            </h2>

            <div className="grid grid-cols-2 gap-x-7 gap-y-4 max-[900px]:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-[14px] font-semibold text-[#333]">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Informe seu nome completo"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("nome", { required: "Informe seu nome" })}
                />
                {errors.nome && (
                  <span className="text-sm text-red-600">{errors.nome.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rg" className="text-[14px] font-semibold text-[#333]">
                  RG
                </label>
                <input
                  id="rg"
                  type="text"
                  placeholder="Informe os números do seu RG"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("rg")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cpf" className="text-[14px] font-semibold text-[#333]">
                  CPF
                </label>
                <input
                  id="cpf"
                  type="text"
                  placeholder="Informe os números do seu CPF"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("cpf")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="nascimento" className="text-[14px] font-semibold text-[#333]">
                  Data de Nascimento
                </label>
                <input
                  id="nascimento"
                  type="date"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("nascimento")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="endereco" className="text-[14px] font-semibold text-[#333]">
                  Endereço
                </label>
                <input
                  id="endereco"
                  type="text"
                  placeholder="Informe seu endereço com número"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("endereco")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cidade" className="text-[14px] font-semibold text-[#333]">
                  Cidade
                </label>
                <input
                  id="cidade"
                  type="text"
                  placeholder="Informe sua cidade"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("cidade")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cep" className="text-[14px] font-semibold text-[#333]">
                  CEP
                </label>
                <input
                  id="cep"
                  type="text"
                  placeholder="Informe seu CEP"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("cep")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="complemento" className="text-[14px] font-semibold text-[#333]">
                  Complemento
                </label>
                <input
                  id="complemento"
                  type="text"
                  placeholder="Apartamento, bloco, referência etc."
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("complemento")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px] font-semibold text-[#333]">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Informe seu e-mail"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("email", {
                    required: "Informe seu e-mail",
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="senha" className="text-[14px] font-semibold text-[#333]">
                  Senha
                </label>
                <input
                  id="senha"
                  type="password"
                  placeholder="Crie uma senha"
                  className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                  {...register("senha", {
                    required: "Crie uma senha",
                    minLength: {
                      value: 6,
                      message: "A senha deve ter no mínimo 6 caracteres",
                    },
                  })}
                />
                {errors.senha && (
                  <span className="text-sm text-red-600">{errors.senha.message}</span>
                )}
              </div>
            </div>

            {tipoSelecionado === "voluntario" && (
              <div className="flex flex-col gap-4">
                <h2 className="my-4 text-[26px] font-bold text-(--accent)">
                  Informações específicas
                </h2>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cro" className="text-[14px] font-semibold text-[#333]">
                    Número do CRO
                  </label>
                  <input
                    id="cro"
                    type="text"
                    className="rounded-lg border-2 border-[#e4e4e4] px-3 py-2.5 text-[15px] outline-none transition duration-200 focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                    {...register("cro", {
                      required: "Informe o CRO",
                    })}
                  />
                  {errors.cro && (
                    <span className="text-sm text-red-600">{errors.cro.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="especialidade"
                    className="text-[14px] font-semibold text-[#333]"
                  >
                    Especialidade
                  </label>
                  <select
                    id="especialidade"
                    className="appearance-none rounded-[10px] border-2 border-[#e4e4e4] bg-white px-3.5 py-2.5 outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                    {...register("especialidade", {
                      required: "Selecione a especialidade",
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option>Ortodontia</option>
                    <option>Endodontia</option>
                    <option>Periodontia</option>
                    <option>Dentística</option>
                    <option>Implantodontia</option>
                    <option>Odontopediatria</option>
                  </select>
                  {errors.especialidade && (
                    <span className="text-sm text-red-600">
                      {errors.especialidade.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="disponibilidade"
                    className="text-[14px] font-semibold text-[#333]"
                  >
                    Disponibilidade
                  </label>
                  <select
                    id="disponibilidade"
                    className="appearance-none rounded-[10px] border-2 border-[#e4e4e4] bg-white px-3.5 py-2.5 outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                    {...register("disponibilidade", {
                      required: "Selecione a disponibilidade",
                    })}
                  >
                    <option value="">Selecione...</option>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                  </select>
                  {errors.disponibilidade && (
                    <span className="text-sm text-red-600">
                      {errors.disponibilidade.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-(--accent) px-6 py-3 font-bold text-white shadow-[0_8px_18px_rgba(185,195,0,0.35)] transition duration-200 hover:brightness-105 active:translate-y-px"
              >
                Confirmar cadastro
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PaginaCadastro;