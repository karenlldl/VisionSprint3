import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Faq from "./pages/Faq/Faq";
import Contato from "./pages/Contato/Contato";
import Integrantes from "./pages/Integrantes/Integrantes";
import PaginaLogin from "./pages/PaginaLogin/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro/PaginaCadastro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="login" element={<PaginaLogin />} />
          <Route path="cadastro" element={<PaginaCadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;