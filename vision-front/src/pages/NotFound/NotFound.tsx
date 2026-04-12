import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#f7f9e8] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid min-h-[80vh] max-w-300 items-center overflow-hidden rounded-3xl bg-[#BABF34] shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:grid-cols-2">
        
        <section className="flex justify-center px-6 py-8 md:px-10">
          <div className="w-full max-w-105 rounded-md bg-white p-8 shadow-[0_8px_22px_rgba(0,0,0,0.08)] md:p-10">
            <h1 className="mb-4 text-[72px] font-extrabold leading-none text-[#f78b1f] md:text-[88px]">
              404
            </h1>

            <h2 className="mb-4 text-[28px] font-bold leading-tight text-[#1f1f1f] md:text-[34px]">
              A página que você está procurando não existe.
            </h2>

            <p className="mb-6 text-[15px] leading-6 text-[#4b4b4b]">
              Você pode ter digitado a URL incorretamente ou a página pode
              ter sido movida. Tente novamente.
            </p>

            <Link
              to="/"
              className="inline-block rounded-md bg-[#f78b1f] px-6 py-3 text-[14px] font-bold uppercase tracking-[0.4px] text-white transition duration-300 hover:brightness-105"
            >
              Vá para a página inicial
            </Link>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-8 md:px-10">
          <img
            src="/img/notfound.png"
            alt="Página não encontrada"
            className="w-full max-w-105 object-contain"
          />
        </section>

      </div>
    </main>
  );
};

export default NotFound;