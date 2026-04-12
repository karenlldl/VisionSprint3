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

// páginas internas
import PaginaBeneficiario from "./pages/PaginaBeneficiario/PaginaBeneficiario";
import PaginaDentista from "./pages/PaginaDentista/PaginaDentista";
import PaginaGestor from "./pages/PaginaGestor/PaginaGestor";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* páginas públicas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="login" element={<PaginaLogin />} />
          <Route path="cadastro" element={<PaginaCadastro />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* páginas internas */}
        <Route path="/beneficiario" element={<PaginaBeneficiario />} />

        <Route path="/dentista" element={<PaginaDentista />} />
        <Route path="/dentista/paciente" element={<PaginaDentista />} />

        <Route path="/gestor" element={<PaginaGestor />} />
        <Route path="/gestor/pacientes" element={<PaginaGestor />} />
        <Route path="/gestor/dentistas" element={<PaginaGestor />} />
        <Route path="/gestor/gestao" element={<PaginaGestor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;