import { useLocation } from "react-router-dom";
import LayoutDois from "../../Components/Layout/LayoutDois";

const PaginaGestor = () => {
  // pega a rota atual
  const location = useLocation();

  // define qual tela aparece
  const aba = location.pathname.includes("pacientes")
    ? "pacientes"
    : location.pathname.includes("dentistas")
    ? "dentistas"
    : location.pathname.includes("gestao")
    ? "gestao"
    : "dashboard";

  return (
    <LayoutDois
      nome="Gestor"
      menuItems={[
        { label: "Dashboard", path: "/gestor" },
        { label: "Pacientes", path: "/gestor/pacientes" },
        { label: "Dentistas", path: "/gestor/dentistas" },
        { label: "Gestão", path: "/gestor/gestao" },
      ]}
    >
      <>
        {/* DASHBOARD */}
        {aba === "dashboard" && (
          <>
            <h2 className="mb-6 text-2xl font-bold text-[#607a1e]">
              Dashboard Geral
            </h2>

            <div className="flex flex-wrap gap-6">
              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">🔎</p>
                <h3 className="mt-2 text-2xl font-bold">320</h3>
                <p>Buscas no site</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">🦷</p>
                <h3 className="mt-2 text-2xl font-bold">185</h3>
                <p>Pacientes cadastrados</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">👨‍⚕️</p>
                <h3 className="mt-2 text-2xl font-bold">32</h3>
                <p>Dentistas ativos</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">💰</p>
                <h3 className="mt-2 text-2xl font-bold">R$ 12.500</h3>
                <p>Total de doações</p>
              </div>
            </div>

            <div className="mt-8 rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Projetos mais buscados
              </h3>

              <div className="mb-4">
                <p className="mb-1 font-semibold">Dentistas do Bem</p>
                <div className="h-6 w-full rounded bg-gray-200">
                  <div className="h-6 w-[75%] rounded bg-[#BABF34] text-center text-sm text-white">
                    190 buscas
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-1 font-semibold">Apolônias do Bem</p>
                <div className="h-6 w-full rounded bg-gray-200">
                  <div className="h-6 w-[55%] rounded bg-[#f78b1f] text-center text-sm text-white">
                    130 buscas
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* PACIENTES */}
        {aba === "pacientes" && (
          <>
            <h2 className="mb-4 text-2xl font-bold text-[#607a1e]">
              Pacientes
            </h2>

            <div className="rounded bg-white p-5 shadow">
              <p>Larissa Silva — Em tratamento</p>
              <p>Larissa Souza — Finalizado</p>
              <p>José Henrique — Em tratamento</p>
              <p>Ana Paula — Em tratamento</p>
              <p>Maria Eduarda — Finalizado</p>
            </div>
          </>
        )}

        {/* DENTISTAS */}
        {aba === "dentistas" && (
          <>
            <h2 className="mb-4 text-2xl font-bold text-[#607a1e]">
              Dentistas
            </h2>

            <div className="rounded bg-white p-5 shadow">
              <p>Dr. João Carlos — Ortodontia</p>
              <p>Dra. Ana Paula — Clínica Geral</p>
              <p>Dr. Marcos Silva — Endodontia</p>
              <p>Dra. Fernanda Costa — Odontopediatria</p>
              <p>Dr. Rafael Souza — Cirurgia</p>
            </div>
          </>
        )}

        {/* GESTÃO */}
        {aba === "gestao" && (
          <>
            <h2 className="mb-6 text-2xl font-bold text-[#607a1e]">
              Gestão
            </h2>

            {/* cards principais */}
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">🔎</p>
                <h3 className="mt-2 text-2xl font-bold">320</h3>
                <p>Buscas no site</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">👨‍⚕️</p>
                <h3 className="mt-2 text-2xl font-bold">32</h3>
                <p>Dentistas ativos</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">💰</p>
                <h3 className="mt-2 text-2xl font-bold">58</h3>
                <p>Doadores cadastrados</p>
              </div>

              <div className="w-55 rounded bg-white p-5 text-center shadow">
                <p className="text-3xl">🦷</p>
                <h3 className="mt-2 text-2xl font-bold">120</h3>
                <p>Pacientes em tratamento</p>
              </div>
            </div>

            {/* projetos mais buscados */}
            <div className="mb-8 rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Projetos mais buscados
              </h3>

              <div className="mb-4">
                <p className="mb-1 font-semibold">Dentistas do Bem</p>
                <div className="h-6 w-full rounded bg-gray-200">
                  <div className="h-6 w-[75%] rounded bg-[#BABF34] text-center text-sm text-white">
                    190 buscas
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-1 font-semibold">Apolônias do Bem</p>
                <div className="h-6 w-full rounded bg-gray-200">
                  <div className="h-6 w-[55%] rounded bg-[#f78b1f] text-center text-sm text-white">
                    130 buscas
                  </div>
                </div>
              </div>
            </div>

            {/* atendimentos por mês */}
            <div className="mb-8 rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Atendimentos por mês
              </h3>

              <div className="space-y-3">
                <div>
                  <p>Janeiro — 20 atendimentos</p>
                  <div className="h-5 w-full rounded bg-gray-200">
                    <div className="h-5 w-[30%] rounded bg-[#BABF34]"></div>
                  </div>
                </div>

                <div>
                  <p>Fevereiro — 35 atendimentos</p>
                  <div className="h-5 w-full rounded bg-gray-200">
                    <div className="h-5 w-[50%] rounded bg-[#BABF34]"></div>
                  </div>
                </div>

                <div>
                  <p>Março — 48 atendimentos</p>
                  <div className="h-5 w-full rounded bg-gray-200">
                    <div className="h-5 w-[70%] rounded bg-[#BABF34]"></div>
                  </div>
                </div>

                <div>
                  <p>Abril — 60 atendimentos</p>
                  <div className="h-5 w-full rounded bg-gray-200">
                    <div className="h-5 w-[85%] rounded bg-[#BABF34]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* tabela de doadores */}
            <div className="mb-8 rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Tabela de doadores
              </h3>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f7f9e8] text-left">
                    <th className="border p-2">Nome</th>
                    <th className="border p-2">Valor</th>
                    <th className="border p-2">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Maria Souza</td>
                    <td className="border p-2">R$ 150,00</td>
                    <td className="border p-2">10/04/2026</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Carlos Lima</td>
                    <td className="border p-2">R$ 300,00</td>
                    <td className="border p-2">12/04/2026</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Fernanda Alves</td>
                    <td className="border p-2">R$ 80,00</td>
                    <td className="border p-2">15/04/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* últimos cadastros */}
            <div className="mb-8 rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Últimos cadastros
              </h3>

              <div className="space-y-2">
                <p className="rounded bg-[#f7f9e8] p-3">
                  Larissa Souza — Paciente cadastrada em 15/04/2026
                </p>
                <p className="rounded bg-[#f7f9e8] p-3">
                  Dr. Marcos Silva — Dentista cadastrado em 14/04/2026
                </p>
                <p className="rounded bg-[#f7f9e8] p-3">
                  José Henrique — Paciente cadastrado em 13/04/2026
                </p>
              </div>
            </div>

            {/* pacientes com retorno pendente */}
            <div className="rounded bg-white p-5 shadow">
              <h3 className="mb-4 text-xl font-bold text-[#607a1e]">
                Pacientes com retorno pendente
              </h3>

              <div className="space-y-2">
                <p className="rounded border-l-4 border-[#f78b1f] bg-[#fff3e0] p-3">
                  Larissa Silva — retorno previsto para 20/04/2026
                </p>
                <p className="rounded border-l-4 border-[#f78b1f] bg-[#fff3e0] p-3">
                  José Henrique — retorno previsto para 22/04/2026
                </p>
                <p className="rounded border-l-4 border-[#f78b1f] bg-[#fff3e0] p-3">
                  Ana Paula — retorno previsto para 25/04/2026
                </p>
              </div>
            </div>
          </>
        )}
      </>
    </LayoutDois>
  );
};

export default PaginaGestor;