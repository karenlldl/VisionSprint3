import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Faq from "./pages/Faq/Faq";
import Contato from "./pages/Contato/Contato";
import Integrantes from "./pages/Integrantes/Integrantes";
import PaginaLogin from "./pages/PaginaLogin/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro/PaginaCadastro";
import Layout from "./Components/Layout/Layout";
import PaginaBeneficiario from "./pages/PaginaBeneficiario/PaginaBeneficiario";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas com layout do site */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
        </Route>



        {/* Áreas dos perfis */}
        <Route path="/beneficiario" element={<PaginaBeneficiario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;