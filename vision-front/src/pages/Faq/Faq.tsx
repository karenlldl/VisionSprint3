import { useState } from "react";

const faqItems = [
  {
    pergunta: "O que é a Vision e qual é a parceria com a Turma do Bem?",
    resposta:
      "A Vision é uma empresa de tecnologia social que desenvolveu o sistema que conecta beneficiários, voluntários e escolas parceiras da Turma do Bem em uma única plataforma digital.",
  },
  {
    pergunta: "Como posso me cadastrar para receber atendimento odontológico gratuito?",
    resposta:
      "Basta acessar a aba “Entre ou Cadastre-se” no menu e preencher o formulário inicial. O sistema indicará automaticamente a escola ou dentista parceiro mais próximo de você.",
  },
  {
    pergunta: "Sou dentista, como posso me tornar voluntário da Turma do Bem?",
    resposta:
      "No mesmo botão de cadastro, selecione “Sou dentista voluntário” e complete o formulário. Nossa equipe fará a validação e enviará os próximos passos por e-mail.",
  },
  {
    pergunta: "Como o sistema define quem tem prioridade no atendimento?",
    resposta:
      "O sistema utiliza um algoritmo de pontuação social (score), que considera critérios como idade, renda, condição dentária e proximidade geográfica — sempre com o objetivo de garantir justiça e transparência.",
  },
  {
    pergunta: "O chatbot da plataforma substitui o atendimento humano?",
    resposta:
      "Não. Ele foi criado para auxiliar pessoas analfabetas e/ou com dificuldades com dispositivos eletrônicos, além de agilizar a triagem e tirar dúvidas iniciais, mas todo atendimento e acompanhamento são realizados por pessoas reais e voluntários da ONG.",
  },
  {
    pergunta: "Posso acompanhar o andamento do meu caso depois do cadastro?",
    resposta:
      "Sim! Após o login, você tem acesso ao seu painel individual, onde é possível ver o status da triagem, próximos passos e atualizações do tratamento.",
  },
  {
    pergunta: "O sistema é acessível para pessoas com deficiência visual ou auditiva?",
    resposta:
      "Sim. A Vision desenvolveu o site com comandos de voz, contraste de cores, leitura de tela e chatbot com suporte em Libras, garantindo inclusão digital.",
  },
  {
    pergunta: "Como funciona o mapa de geolocalização dos atendimentos?",
    resposta:
      "O sistema cruza automaticamente o endereço do beneficiário com o das escolas e dentistas cadastrados, mostrando as opções mais próximas e disponíveis.",
  },
  {
    pergunta: "Minhas informações estão seguras no sistema?",
    resposta:
      "Sim. Todos os dados são armazenados de forma criptografada, seguindo a Lei Geral de Proteção de Dados (LGPD) e políticas internas de segurança da Vision.",
  },
  {
    pergunta: "Como posso contribuir com o projeto?",
    resposta:
      "Você pode participar como voluntário, fazer doações financeiras ou divulgar o projeto. Cada pequena ação ajuda a multiplicar o bem e transformar mais sorrisos.",
  },
];

function Faq() {
  const [aberta, setAberta] = useState(null);

  const togglePergunta = (index) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <main>
      <section className="bg-[#f7f9e8] px-[8%] py-16">
        <h1 className="text-center text-[#4e7c11] text-3xl md:text-4xl font-extrabold mb-8">
          Perguntas Frequentes
        </h1>

        <div className="max-w-980px mx-auto grid gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-[6px] border-[#BABF34] rounded-xl px-5 py-4 shadow-md"
            >
              <button
                onClick={() => togglePergunta(index)}
                className="w-full flex items-center justify-between text-left font-bold text-[#607a1e] text-lg cursor-pointer"
              >
                <span>{item.pergunta}</span>

                <span className="bg-[#f78b1f] text-white rounded-lg px-3 py-1 ml-4 shrink-0">
                  {aberta === index ? "–" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  aberta === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Faq;