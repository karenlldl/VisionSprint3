const Nav = () => {
    return (
        <>
        <header className="header">
      <div className="logo">
        <a href="index.html">
          <img src="IMAGEM/LOGOTDB.png" alt="Logo ONG Turma do Bem"/>
        </a>
      </div>

      <button className="hamburger" id="hamburger" aria-label="Abrir menu" aria-controls="menu" aria-expanded="false">☰</button>

      <nav>
        <ul className="menu" id="menu">
          <li><a className="active" href="index.html">Início</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="integrante.html">Integrantes</a></li>
        </ul>
      </nav>

      <div className="auth">
        <img src="IMAGEM/icone login.png" alt="Ícone de login" className="auth__icon"/>
        <a className="active" href="paginaLogin.html">Entre ou <br/> Cadastre-se</a>
      </div>
    </header>
        </>
    )
}
export default Nav;