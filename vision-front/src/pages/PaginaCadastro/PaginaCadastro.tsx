const PaginaCadastro = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,var(--lime-700)_0_50%,#fff_50%)] grid place-items-center p-8 max-[900px]:p-6">
      <div className="w-full max-w-270 bg-white rounded-[22px] shadow-[0_18px_45px_rgba(0,0,0,0.12)] grid grid-cols-[300px_1fr] overflow-hidden max-[900px]:grid-cols-1">
        <aside className="bg-[linear-gradient(180deg,var(--lime-600),var(--lime-500))] px-7 py-10 flex flex-col gap-7 items-start justify-center max-[900px]:items-center max-[900px]:text-center">
          <img
            src="/img/logo_vision.png"
            alt="Vision Technology"
            className="w-67.5 h-auto drop-shadow-[0_1px_0_rgba(0,0,0,0.1)]"
          />

          <p className="text-[28px] leading-[1.2] text-white font-light max-[900px]:text-[24px]">
            Precisa de ajuda
            <br />
            para se <span className="font-bold italic">cadastrar</span>?
          </p>

          <a
            className="bg-white text-(--accent) rounded-full px-5.5 py-3 font-bold no-underline inline-block shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
            href="#"
          >
            Clique aqui
          </a>
        </aside>

        <section className="bg-white px-6 py-10 md:px-[clamp(24px,5vw,64px)]">
          <form className="space-y-6" action="#" method="post">
            <div className="grid gap-2.5 justify-items-center mb-2 max-[900px]:justify-items-stretch">
              <label
                className="text-[14px] text-(--muted)"
                htmlFor="tipo"
              >
                Selecione se você é paciente ou voluntário:
              </label>

              <select
                id="tipo"
                name="tipo"
                required
                className="appearance-none border-2 border-[#e4e4e4] rounded-[10px] px-3.5 py-2.5 w-65 bg-white outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)] max-[900px]:w-full"
              >
                <option value="" disabled defaultValue="">
                  Selecione...
                </option>
                <option value="paciente">Paciente</option>
                <option value="voluntario">Voluntário</option>
              </select>
            </div>

            <h2 className="text-(--accent) text-[26px] font-bold my-4.5 mb-2">
              Dados pessoais
            </h2>

            <div className="grid grid-cols-2 gap-y-4.5 gap-x-7 max-[900px]:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-[14px] text-[#333] font-semibold">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Informe seu nome completo"
                  required
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rg" className="text-[14px] text-[#333] font-semibold">
                  RG
                </label>
                <input
                  id="rg"
                  name="rg"
                  type="text"
                  placeholder="Informe os números do seu RG"
                  inputMode="numeric"
                  pattern="[0-9\.\-]*"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cpf" className="text-[14px] text-[#333] font-semibold">
                  CPF
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="Informe os números do seu CPF"
                  inputMode="numeric"
                  pattern="\d{11}"
                  title="Digite 11 números (apenas dígitos)"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="nascimento" className="text-[14px] text-[#333] font-semibold">
                  Data de Nascimento
                </label>
                <input
                  id="nascimento"
                  name="nascimento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="endereco" className="text-[14px] text-[#333] font-semibold">
                  Endereço
                </label>
                <input
                  id="endereco"
                  name="endereco"
                  type="text"
                  placeholder="Informe seu endereço com número"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cidade" className="text-[14px] text-[#333] font-semibold">
                  Cidade
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Informe sua cidade"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cep" className="text-[14px] text-[#333] font-semibold">
                  CEP
                </label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  placeholder="Informe seu CEP"
                  inputMode="numeric"
                  pattern="\d{8}"
                  title="Digite 8 números (apenas dígitos)"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="complemento" className="text-[14px] text-[#333] font-semibold">
                  Complemento
                </label>
                <input
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder="Apartamento, bloco, referência etc."
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px] text-[#333] font-semibold">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Informe seu e-mail"
                  required
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="senha" className="text-[14px] text-[#333] font-semibold">
                  Senha
                </label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Crie uma senha"
                  minLength={6}
                  required
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 placeholder:text-[#9c9c9c] focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4" data-show-for="voluntario">
              <h2 className="text-(--accent) text-[26px] font-bold my-4.5 mb-2">
                Informações específicas
              </h2>

              <div className="flex flex-col gap-2">
                <label htmlFor="cro" className="text-[14px] text-[#333] font-semibold">
                  Número do CRO
                </label>
                <input
                  id="cro"
                  name="cro"
                  type="text"
                  className="border-2 border-[#e4e4e4] rounded-lg px-3 py-2.5 text-[15px] outline-none transition duration-200 focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-2" data-show-for="voluntario">
                <label htmlFor="especialidade" className="text-[14px] text-[#333] font-semibold">
                  Especialidade
                </label>
                <select
                  id="especialidade"
                  name="especialidade"
                  required
                  className="appearance-none border-2 border-[#e4e4e4] rounded-[10px] px-3.5 py-2.5 bg-white outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                >
                  <option value="" disabled defaultValue="">
                    Selecione...
                  </option>
                  <option>Ortodontia</option>
                  <option>Endodontia</option>
                  <option>Periodontia</option>
                  <option>Dentística</option>
                  <option>Implantodontia</option>
                  <option>Odontopediatria</option>
                </select>
              </div>

              <div className="flex flex-col gap-2" data-show-for="voluntario">
                <label htmlFor="disponibilidade" className="text-[14px] text-[#333] font-semibold">
                  Disponibilidade
                </label>
                <select
                  id="disponibilidade"
                  name="disponibilidade"
                  required
                  className="appearance-none border-2 border-[#e4e4e4] rounded-[10px] px-3.5 py-2.5 bg-white outline-none focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(185,195,0,0.2)]"
                >
                  <option value="" disabled defaultValue="">
                    Selecione...
                  </option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-4.5">
              <button
                type="submit"
                id="btnConfirmar"
                className="border-0 bg-(--accent) text-white rounded-full px-6.5 py-3.25 font-bold cursor-pointer shadow-[0_8px_18px_rgba(185,195,0,0.35)] transition duration-200 hover:brightness-105 active:translate-y-px"
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