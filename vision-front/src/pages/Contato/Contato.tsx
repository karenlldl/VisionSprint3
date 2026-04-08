import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");

    setNome("");
    setTelefone("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  };

  return (
    <>
      {/* BANNER */}
      <section className="w-full h-70 md:h-105 overflow-hidden">
        <img
          src="/img/foto_contato (1).png"
          alt="Contato"
          className="w-full h-full object-cover"
        />
      </section>

      {/* FORMULÁRIO */}
      <main>
        <section className="max-w-225 mx-auto mt-20 mb-16 bg-white px-12 py-14 rounded-[18px] shadow-md text-center">
          <h1 className="text-[#4e7c11] text-[32px] font-bold mb-2">
            Fale Conosco
          </h1>

          <h2 className="text-[#94c120] text-[20px] mb-8">
            Envie sua mensagem
          </h2>

          <form
            onSubmit={enviar}
            className="flex flex-col gap-4 text-left"
          >
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              className="border-2 border-[#e7e7e5] rounded-[10px] px-4 py-3 outline-none focus:border-[#f78b1f] focus:shadow-[0_0_8px_rgba(247,139,31,0.4)]"
              required
            />

            <label>Telefone:</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(11) 99999-9999"
              className="border-2 border-[#e7e7e5] rounded-[10px] px-4 py-3 outline-none focus:border-[#f78b1f] focus:shadow-[0_0_8px_rgba(247,139,31,0.4)]"
              required
            />

            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="border-2 border-[#e7e7e5] rounded-[10px] px-4 py-3 outline-none focus:border-[#f78b1f] focus:shadow-[0_0_8px_rgba(247,139,31,0.4)]"
              required
            />

            <label>Assunto:</label>
            <input
              type="text"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Ex: Duvida sobre cadastro"
              className="border-2 border-[#e7e7e5] rounded-[10px] px-4 py-3 outline-none focus:border-[#f78b1f] focus:shadow-[0_0_8px_rgba(247,139,31,0.4)]"
              required
            />

            <label>Mensagem:</label>
            <textarea
              rows={6}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva sua mensagem aqui ..."
              className="border-2 border-[#e7e7e5] rounded-[10px] px-4 py-3 outline-none focus:border-[#f78b1f] focus:shadow-[0_0_8px_rgba(247,139,31,0.4)]"
              required
            />

            <button
              type="submit"
              className="bg-[#f78b1f] text-white px-8 py-3 rounded-[10px] font-bold cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* LOCALIZAÇÃO */}
        <section className="w-full bg-[#d6e76b6b] px-[5%] py-20 flex justify-center">
          <div className="flex flex-wrap justify-center gap-12 max-w-300 w-full">
            
            <div className="w-full max-w-150">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                className="w-full h-95 rounded-2xl border-4 border-white shadow-lg"
                style={{ border: 0 }}
                loading="lazy"
                title="Mapa"
              ></iframe>
            </div>

            <div className="bg-[#babf349c] text-white px-8 py-10 rounded-[18px] max-w-100">
              <h2 className="text-xl font-bold mb-4">
                Endereço Turma do Bem
              </h2>

              <p>
                Rua Maurício Francisco Klabin, 449<br />
                Vila Mariana, São Paulo - SP<br />
                CEP 04120-020
              </p>

              <p className="mt-4">
                <strong>Telefone:</strong> (11) 5084-7276
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
export default Contato;