import { Link } from "react-router-dom";

const PaginaDentista = () => {
  return (
    <div className="dent-wrapper">
      <header className="dent-header">
        <button className="hamburger" id="menuToggle">
          ☰
        </button>

        <div className="dent-logo">
          <Link to="/">
            <img
              src="/IMAGEM/logo-turma-do-bem-branca.png"
              alt="Logo Turma do Bem"
            />
          </Link>
        </div>

        <div className="dent-user">
          <p>
            Olá, <b>Dr. João Carlos</b>
          </p>
          <button className="benef-logout-btn" id="logoutBtn">
            Sair
          </button>
        </div>
      </header>

      <aside className="dent-menu">
        <img
          src="/IMAGEM/logo_vision.png"
          alt="Logo Vision"
          className="dent-menu-logo"
        />

        <nav>
          <ul>
            <li>
              <Link to="/dentista" className="active">
                Início
              </Link>
            </li>
            <li>
              <Link to="/dentista/pacientes">Pacientes</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dent-content">
        <section className="dent-dados">
          <img
            src="/IMAGEM/Dr.Joao.png"
            alt="Foto do Dentista"
            className="dent-foto"
          />

          <div className="dent-info">
            <h2>Dados Pessoais</h2>
            <p>
              <b>Nome:</b> Dr. João Carlos
            </p>
            <p>
              <b>Especialidade:</b> Ortodontia
            </p>
            <p>
              <b>CRO:</b> 12345-SP
            </p>
            <p>
              <b>Telefone:</b> (11) 98888-7777
            </p>
            <p>
              <b>Endereço:</b> Rua Exemplo, 100 - São Paulo
            </p>
          </div>
        </section>

        <section className="dent-agenda">
          <h2 className="titulo-agenda">Agenda</h2>

          <div className="dent-agenda-fixa">
            <img
              src="/IMAGEM/agenda_dentista.png"
              alt="Agenda do dentista"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaginaDentista;