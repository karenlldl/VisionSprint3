import { Link } from "react-router-dom";

const PaginaLogin = () => {
  return (
    <>
    <main className="login-container">
      <div className="login-card">
        <div className="login-verde">
          <img
            src="/imagem/logo_vision.png"
            alt="Logo Vision"
            className="logo-img"
          />
        </div>

        <div className="login-branco">
          <h2 className="bem-vindo">Bem vindo!</h2>

          <form id="formLogin" className="form" action="" method="get">
            <label htmlFor="perfil">você é:</label>
            <select id="perfil" name="perfil" required>
              <option value="" disabled defaultValue="">
                Selecione...
              </option>
              <option value="beneficiario">Beneficiário</option>
              <option value="gestor">Gestor</option>
              <option value="dentista">Dentista</option>
            </select>

            <label htmlFor="email">seu e-mail</label>
            <input id="email" type="email" name="email" required />

            <label htmlFor="senha">sua senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              required
              minLength={6}
            />

            <button type="submit" className="btn-primeiro">
              <span className="arrow">➜</span> Entrar
            </button>
          </form>

          <p className="signup-hint">
            Não tem uma conta ainda? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </div>
      </div>
    </main>
    </>
  );
};

export default PaginaLogin;