const Home = () => {
    return (
        <>
      <section className="banner">
        <img
          className="banner-bg"
          src="/img/Header.png"
          alt="Robô apresentando o comando de voz"
        />

        <div className="banner-container">
          <div className="banner-grid">
            <div className="banner-text">
              <h2>Precisa de ajuda?</h2>
              <h1>
                Faça seu cadastro via
                <br />
                <strong>Comando de voz</strong>
              </h1>
              <a href="/paginaLogin.html" className="clique-aqui">
                Clique aqui
              </a>
            </div>

            <div className="banner-spacer" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="sobre-texto">
          <p>
            A <strong>Turma do Bem</strong> gerencia a maior rede de voluntariado
            especializado do mundo, contando com mais de{" "}
            <strong>18 mil dentistas</strong> atuando em <strong>12 países</strong>.
          </p>

          <a href="/paginaLogin.html" className="btn-fazer-parte">
            Quero fazer parte
          </a>
        </div>

        <div className="sobre-video">
          <iframe
            src="https://www.youtube.com/embed/_a-sIYa3YF8"
            title="Vídeo institucional Turma do Bem"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="numeros">
        <h2>
          Turma do Bem
          <span>em números</span>
        </h2>

        <div className="numeros-cards">
          <div>
            <img
              src="/IMAGEM/ICONE_AMARELO_JOVENS.png"
              alt="Jovens atendidos"
            />
            <p className="card1">
              <strong>+82 mil</strong>
            </p>
            <p>Jovens atendidos</p>
          </div>

          <div>
            <img
              src="/IMAGEM/ICONE_LARANJA_MULHER.png"
              alt="Mulheres atendidas"
            />
            <p className="card1">
              <strong>+1,1 mil</strong>
            </p>
            <p>Mulheres atendidas</p>
          </div>

          <div>
            <img
              src="/IMAGEM/ICONE_AMARELO_DENTISTA_VOLUNTARIO.png"
              alt="Dentistas voluntários"
            />
            <p className="card1">
              <strong>+18 mil</strong>
            </p>
            <p>Dentistas voluntários</p>
          </div>
        </div>
      </section>

      <section className="depoimento">
        <div className="depoimento-wrap">
          <div className="avatar-circulo">
            <img
              src="/IMAGEM/relisiane-beneficiaria-turma-do-bem.jpg"
              alt="Reislaine Rodrigues, beneficiária da Turma do Bem"
            />
          </div>

          <div className="depoimento-bubble">
            <p>
              Eu tinha muita vergonha de sorrir, me sentia toda feia e sonhava
              com um aparelho para corrigir os dentes. Conforme as cáries sumiam
              e os dentes se endireitavam, eu me tornava cada vez mais confiante.
              A aparência conta sim, e muito, porque precisamos da autoestima
              para ir atrás do que queremos.
            </p>

            <h3>
              Reislaine Rodrigues,{" "}
              <span>beneficiária da Turma do Bem</span>
            </h3>
          </div>
        </div>
      </section>
        </>
    )
}
export default Home;