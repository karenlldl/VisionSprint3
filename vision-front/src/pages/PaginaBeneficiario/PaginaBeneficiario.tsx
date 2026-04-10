import LayoutDois from "../../Components/Layout/LayoutDois";

const PaginaBeneficiario = () => {
  return (
    <>
    <LayoutDois
      nome="Larissa"
      menuItems={[
        { label: "Início", path: "/beneficiario" },
      ]}
    >
      <div>
        <main className="ml-0 p-5 md:ml-60 md:p-7.5">
          <section className="flex flex-wrap items-start rounded-[10px] bg-[#fff3e0] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.1)] max-md:flex-col max-md:items-center max-md:text-center">
            <img
              src="img/foto_larissa.jpeg"
              alt="Foto da beneficiária"
              className="mr-5 h-32.5 w-32.5 rounded-full object-cover max-md:mr-0 x-md:mb-3.75"
            />

            <div className="rounded-lg bg-[#f78b1f] p-3.75 text-[15px] leading-[1.8] text-white max-md:w-full">
              <p>
                <b>Projeto Social:</b>{" "}
                <select
                  id="projetoSelect"
                  required
                  defaultValue=""
                  className="cursor-pointer rounded-md border-none bg-white px-2.5 py-1 font-bold text-[#f78b1f] transition duration-300 hover:bg-[#ffe0b2]"
                >
                  <option value="" disabled>
                    Selecione o projeto social
                  </option>
                  <option value="Dentistas do Bem">Dentistas do Bem</option>
                  <option value="Apolônia do Bem">Apolônia do Bem</option>
                </select>
              </p>

              <p>
                <b>Nome:</b> Larissa Silva
              </p>
              <p>
                <b>CPF:</b> 123.456.789-00
              </p>
              <p>
                <b>RG:</b> 12.345.678-90
              </p>
              <p>
                <b>Endereço:</b> Rua das Flores, 120, São Paulo
              </p>
              <p>
                <b>Telefone:</b> (11) 98888-5555
              </p>
            </div>
          </section>

          <section className="mt-7.5">
            <h2 className="mb-3.75 text-2xl font-semibold text-[#607a1e]">
              Próximas consultas
            </h2>

            <div className="flex flex-wrap items-center justify-between rounded-[10px] border-l-[5px] border-[#f78b1f] bg-white px-6 py-5 shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3">
                <span className="text-xl">🦷</span>
                <p className="text-[15px] text-black">
                <b>Procedimento:</b> Limpeza e Restauração
                </p>
                </div>

            <p className="text-[15px] text-black max-md:mt-3">
            01/11/2025 às 08:30
            </p>
            </div>
          </section>
        </main>
      </div>
    </LayoutDois>
    </>
  );
};

export default PaginaBeneficiario;