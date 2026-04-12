import { useState } from "react";
import { useLocation } from "react-router-dom";
import LayoutDois from "../../Components/Layout/LayoutDois";

type Historico = {
  id: number;
  procedimento: string;
  data: string;
};

type Agenda = {
  id: number;
  procedimento: string;
  data: string;
  hora: string;
};

type Paciente = {
  id: number;
  nome: string;
  telefone: string;
  foto: string;
  status: string;
  historico: Historico[];
  agenda: Agenda[];
};

const PaginaDentista = () => {
  const location = useLocation();

  const aba = location.pathname.includes("paciente") ? "paciente" : "inicio";

  const [buscaInput, setBuscaInput] = useState("");
  const [pacienteSelecionado, setPacienteSelecionado] =
    useState<Paciente | null>(null);

  const pacientes: Paciente[] = [
    {
      id: 1,
      nome: "Larissa Silva",
      telefone: "(11) 98888-5555",
      foto: "/img/foto_larissa.jpeg",
      status: "Em tratamento",
      historico: [
        { id: 1, procedimento: "Limpeza", data: "10/10/2025" },
        { id: 2, procedimento: "Restauração", data: "18/10/2025" },
      ],
      agenda: [
        { id: 1, procedimento: "Retorno", data: "01/11/2025", hora: "08:30" },
      ],
    },
    {
      id: 2,
      nome: "Larissa Souza",
      telefone: "(11) 97777-4444",
      foto: "/img/paciente2.png",
      status: "Finalizado",
      historico: [
        { id: 1, procedimento: "Avaliação", data: "05/10/2025" },
      ],
      agenda: [
        { id: 1, procedimento: "Limpeza", data: "20/11/2025", hora: "09:00" },
      ],
    },
    {
      id: 3,
      nome: "José Henrique",
      telefone: "(11) 96666-2222",
      foto: "/img/paciente3.png",
      status: "Em tratamento",
      historico: [
        { id: 1, procedimento: "Canal", data: "12/10/2025" },
      ],
      agenda: [
        { id: 1, procedimento: "Retorno", data: "25/11/2025", hora: "14:00" },
      ],
    },
  ];

  function tirarAcento(texto: string) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const pacientesFiltrados = pacientes.filter((paciente) =>
    tirarAcento(paciente.nome).includes(tirarAcento(buscaInput))
  );

  return (
    <LayoutDois
      nome="João"
      mostrarDr={true}
      menuItems={[
        { label: "Início", path: "/dentista" },
        { label: "Paciente", path: "/dentista/paciente" },
      ]}
    >
      <>
        {/* INÍCIO */}
        {aba === "inicio" && (
          <>
            <h2 className="mb-4 text-2xl font-bold text-[#607a1e]">
              Dados do Dentista
            </h2>

            <section className="flex flex-wrap rounded bg-[#fff3e0] p-5 shadow">
              <img
                src="/img/Dr.Joao.png"
                alt="Dentista"
                className="h-32 w-32 rounded-full border-4 border-[#BABF34] object-cover"
              />

              <div className="mt-4 w-full rounded bg-[#f78b1f] p-4 text-white md:ml-5 md:mt-0">
                <p><b>Nome:</b> Dr. João Carlos</p>
                <p><b>Especialidade:</b> Ortodontia</p>
                <p><b>Telefone:</b> (11) 98888-7777</p>
                <p><b>Endereço:</b> São Paulo</p>
              </div>
            </section>

            <h2 className="mt-8 text-2xl font-bold text-[#607a1e]">
              Agenda do Dentista
            </h2>

            <img
              src="/img/agenda_dentista.png"
              alt="Agenda"
              className="mt-4 w-full max-w-225"
            />
          </>
        )}

        {/* PACIENTE */}
        {aba === "paciente" && (
          <>
            <h2 className="mb-2 text-2xl font-bold">
              Pacientes cadastrados
            </h2>

            <p className="mb-4">
              Digite o nome do paciente para procurar.
            </p>

            <div className="relative max-w-100">
              <input
                type="text"
                placeholder="Digite o nome do paciente"
                value={buscaInput}
                onChange={(e) => {
                  setBuscaInput(e.target.value);
                  setPacienteSelecionado(null);
                }}
                className="w-full rounded border p-2"
              />

              {buscaInput !== "" && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 border bg-white shadow">
                  {pacientesFiltrados.length > 0 ? (
                    pacientesFiltrados.map((paciente) => (
                      <div
                        key={paciente.id}
                        onClick={() => {
                          setPacienteSelecionado(paciente);
                          setBuscaInput("");
                        }}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {paciente.nome}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">
                      Nenhum paciente encontrado
                    </div>
                  )}
                </div>
              )}
            </div>

            {!buscaInput && !pacienteSelecionado && (
              <>
                <h3 className="mt-6 mb-4 text-xl font-bold">
                  Pacientes cadastrados
                </h3>

                <div className="flex flex-wrap gap-6">
                  {pacientes.map((paciente) => (
                    <div
                      key={paciente.id}
                      className="w-70 rounded bg-white p-5 text-center shadow border-l-8 border-[#BABF34]"
                    >
                      <img
                        src={paciente.foto}
                        alt={paciente.nome}
                        className="mx-auto h-36 w-36 rounded-full border-4 border-[#BABF34] object-cover"
                      />

                      <h3 className="mt-4 text-lg font-bold">
                        {paciente.nome}
                      </h3>

                      <p
                        className={`mt-2 w-full rounded px-3 py-2 text-center font-bold text-white ${
                          paciente.status === "Finalizado"
                            ? "bg-green-600"
                            : "bg-orange-500"
                        }`}
                      >
                        {paciente.status === "Finalizado"
                          ? "Finalizado"
                          : "Em tratamento"}
                      </p>

                      <button
                        onClick={() => setPacienteSelecionado(paciente)}
                        className="mt-4 rounded bg-[#f78b1f] px-4 py-2 text-white"
                      >
                        Ver histórico
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {pacienteSelecionado && (
              <div className="mt-6">
                <button
                  onClick={() => setPacienteSelecionado(null)}
                  className="mb-4 rounded bg-[#BABF34] px-4 py-2 text-white"
                >
                  Voltar
                </button>

                <div className="flex flex-wrap rounded bg-[#fff3e0] p-5 shadow">
                  <img
                    src={pacienteSelecionado.foto}
                    alt="Paciente"
                    className="h-32 w-32 rounded-full border-4 border-[#BABF34] object-cover"
                  />

                  <div className="mt-4 w-full rounded bg-[#f78b1f] p-4 text-white md:ml-5 md:mt-0">
                    <h2 className="text-xl font-bold">Cadastro do paciente</h2>
                    <p><b>Nome:</b> {pacienteSelecionado.nome}</p>
                    <p>
                      <b>Status:</b>{" "}
                      {pacienteSelecionado.status === "Finalizado"
                        ? "Finalizado"
                        : "Em tratamento"}
                    </p>
                    <p><b>Telefone:</b> {pacienteSelecionado.telefone}</p>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#607a1e]">
                  Histórico
                </h3>

                {pacienteSelecionado.historico.map((item) => (
                  <div
                    key={item.id}
                    className="mt-2 rounded bg-white p-3 shadow"
                  >
                    {item.procedimento} - {item.data}
                  </div>
                ))}

                <h3 className="mt-6 text-xl font-bold text-[#607a1e]">
                  Agenda
                </h3>

                {pacienteSelecionado.agenda.map((item) => (
                  <div
                    key={item.id}
                    className="mt-2 rounded bg-white p-3 shadow"
                  >
                    {item.procedimento} - {item.data} às {item.hora}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </>
    </LayoutDois>
  );
};

export default PaginaDentista;