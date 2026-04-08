const PaginaCadastro = () => {
  return (
    <>
    <div className="page-split-bg">
      <div className="imgVision">
        <aside className="aside">
          <img
            src="/imagem/logo_vision.png"
            alt="Vision Technology"
            className="logo"
          />

          <p className="help-text">
            Precisa de ajuda
            <br />
            para se <span>cadastrar</span>?
          </p>

          <a className="btn-secundario" href="#">
            Clique aqui
          </a>
        </aside>

        <section className="content">
          <form className="form" action="#" method="post">
            <div className="top-row">
              <label className="select-label" htmlFor="tipo">
                Selecione se você é paciente ou voluntário:
              </label>

              <select id="tipo" name="tipo" required>
                <option value="" disabled defaultValue="">
                  Selecione...
                </option>
                <option value="paciente">Paciente</option>
                <option value="voluntario">Voluntário</option>
              </select>
            </div>

            <h2 className="section-title">Dados pessoais</h2>

            <div className="grid">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Informe seu nome completo"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="rg">RG</label>
                <input
                  id="rg"
                  name="rg"
                  type="text"
                  placeholder="Informe os números do seu RG"
                  inputMode="numeric"
                  pattern="[0-9\.\-]*"
                />
              </div>

              <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="Informe os números do seu CPF"
                  inputMode="numeric"
                  pattern="\d{11}"
                  title="Digite 11 números (apenas dígitos)"
                />
              </div>

              <div className="field">
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input
                  id="nascimento"
                  name="nascimento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                />
              </div>

              <div className="field">
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  name="endereco"
                  type="text"
                  placeholder="Informe seu endereço com número"
                />
              </div>

              <div className="field">
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Informe sua cidade"
                />
              </div>

              <div className="field">
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  placeholder="Informe seu CEP"
                  inputMode="numeric"
                  pattern="\d{8}"
                  title="Digite 8 números (apenas dígitos)"
                />
              </div>

              <div className="field">
                <label htmlFor="complemento">Complemento</label>
                <input
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder="Apartamento, bloco, referência etc."
                />
              </div>

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Informe seu e-mail"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Crie uma senha"
                  minLength={6}
                  required
                />
              </div>
            </div>

            <div className="field" data-show-for="voluntario">
              <h2 className="section-title">Informações específicas</h2>

              <div className="field">
                <label htmlFor="cro">Número do CRO</label>
                <input id="cro" name="cro" type="text" />
              </div>

              <div className="field" data-show-for="voluntario">
                <label htmlFor="especialidade">Especialidade</label>
                <select id="especialidade" name="especialidade" required>
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

              <div className="field" data-show-for="voluntario">
                <label htmlFor="disponibilidade">Disponibilidade</label>
                <select id="disponibilidade" name="disponibilidade" required>
                  <option value="" disabled defaultValue="">
                    Selecione...
                  </option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
            </div>

            <div className="actions">
              <button
                type="submit"
                className="btn-confirma"
                id="btnConfirmar"
              >
                Confirmar cadastro
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
    </>
  );
};

export default PaginaCadastro;