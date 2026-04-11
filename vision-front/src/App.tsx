import { BrowserRouter, Routes, Route } from "react-router-dom";

// páginas públicas
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Faq from "./pages/Faq/Faq";
import Contato from "./pages/Contato/Contato";
import Integrantes from "./pages/Integrantes/Integrantes";
import PaginaLogin from "./pages/PaginaLogin/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro/PaginaCadastro";

// layout do site
import Layout from "./Components/Layout/Layout";
<<<<<<< HEAD

// páginas internas
import PaginaBeneficiario from "./pages/PaginaBeneficiario/PaginaBeneficiario";
import PaginaDentista from "./pages/PaginaDentista/PaginaDentista";
=======
import PaginaBeneficiario from "./pages/PaginaBeneficiario/PaginaBeneficiario";

>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* páginas normais do site */}
=======
        {/* Rotas públicas com layout do site */}
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
<<<<<<< HEAD
          <Route path="login" element={<PaginaLogin />} />
          <Route path="cadastro" element={<PaginaCadastro />} />
        </Route>

        {/* páginas internas */}
        <Route path="/beneficiario" element={<PaginaBeneficiario />} />

        {/* dentista */}
        {/* usamos a mesma página para /dentista e /dentista/paciente */}
        <Route path="/dentista" element={<PaginaDentista />} />
        <Route path="/dentista/paciente" element={<PaginaDentista />} />
=======
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
        </Route>



        {/* Áreas dos perfis */}
        <Route path="/beneficiario" element={<PaginaBeneficiario />} />
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
      </Routes>
    </BrowserRouter>
  );
};

export default App;