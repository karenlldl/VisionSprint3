import { Link } from "react-router-dom";
import NumerosCard from "../../Components/NumerosCards/NumerosCards";

const Home = () => {
    
const cards = [
  {
    image: "/img/ICONE_AMARELO_JOVENS.png",
    alt: "Jovens atendidos",
    value: "+82 mil",
    label: "Jovens atendidos",
  },
  {
    image: "/img/ICONE_LARANJA_MULHER.png",
    alt: "Mulheres atendidas",
    value: "+1,1 mil",
    label: "Mulheres atendidas",
  },
  {
    image: "/img/ICONE_AMARELO_DENTISTA_VOLUNTARIO.png",
    alt: "Dentistas voluntários",
    value: "+18 mil",
    label: "Dentistas voluntários",
  },
];


  return (
    <>
      <section className="relative w-full h-[clamp(260px,60vh,420px)] xl:h-120 flex items-center justify-start overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-right z-10"
          src="/img/Header.png"
          alt="Robô apresentando o comando de voz"
        />

        <div className="relative z-20 w-full flex items-center justify-start px-[8%]">
          <div className="text-white max-w-full text-center sm:max-w-xl md:text-left drop-shadow-md">
            <h2 className="text-[clamp(18px,2.2vw,24px)] font-medium">
              Precisa de ajuda?
            </h2>

            <h1 className="text-[clamp(26px,3vw,38px)] leading-tight font-extrabold my-2 mb-5">
              Faça seu cadastro via
              <br />
              <strong>Comando de voz</strong>
            </h1>

            <Link
              to="/login"
              className="inline-block bg-[#f78b1f] text-white rounded-lg px-8 py-3 font-bold text-base transition duration-300 shadow-md hover:bg-[#ffd28a] hover:text-[#333]"
            >
              Clique aqui
            </Link>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="flex flex-col lg:flex-row items-center justify-center bg-[#BABF34] text-white px-5 py-10 sm:px-[10%] sm:py-16 lg:py-20 gap-10"
      >
        <div className="flex-1 max-w-full lg:max-w-[48%] text-lg leading-relaxed">
          <p>
            A <strong>Turma do Bem</strong> gerencia a maior rede de voluntariado
            especializado do mundo, contando com mais de{" "}
            <strong>18 mil dentistas</strong> atuando em <strong>12 países</strong>.
          </p>

          <Link
            to="/login"
            className="inline-block mt-6 bg-[#f78b1f] text-white rounded-lg px-8 py-2 font-bold text-lg transition duration-300 shadow-md hover:bg-[#ffd28a] hover:text-[#333]"
          >
            Quero fazer parte
          </Link>
        </div>

        <div className="flex-1 max-w-full lg:max-w-[48%] w-full">
          <iframe
            src="https://www.youtube.com/embed/_a-sIYa3YF8"
            title="Vídeo institucional Turma do Bem"
            allowFullScreen
            className="w-full aspect-video rounded-lg border-4 border-[#CED600]"
          ></iframe>
        </div>
      </section>

      <section className="bg-white px-[5%] py-12 sm:py-16 text-center">
        <h2 className="text-[#b5c634] text-[clamp(24px,2.4vw,32px)] font-normal leading-tight mb-12">
          Turma do Bem
          <span className="block font-extrabold text-[#a9ba2f] text-lg">
            em números
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
        {cards.map((card) => (
          <NumerosCard
            key={card.label}
            image={card.image}
            alt={card.alt}
            value={card.value}
            label={card.label}
        />
      ))}
</div>


      </section>

      <section className="bg-[#fff4e8] px-[10%] py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src="/img/relisiane-beneficiaria-turma-do-bem.jpg"
            alt="Reislaine Rodrigues"
            className="w-48 h-48 rounded-full object-cover border-4 border-[#f78b1f]"
          />

          <div className="bg-[#f78b1f] text-white px-10 py-8 rounded-2xl max-w-xl shadow-md">
            <p className="text-lg leading-relaxed mb-2">
              Eu tinha muita vergonha de sorrir, me sentia toda feia e sonhava
              com um aparelho para corrigir os dentes. Conforme as cáries sumiam
              e os dentes se endireitavam, eu me tornava cada vez mais confiante.
            </p>

            <h3 className="text-sm font-semibold">
              Reislaine Rodrigues,{" "}
              <span>beneficiária da Turma do Bem</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;