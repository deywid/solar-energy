import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import TemplatePage from "./pages/TemplatePage";
import Painel from "./pages/Painel";
import Unidades from "./pages/Unidades";
import Cadastros from "./pages/Cadastros";
import CadUnidade from "./components/Form-Cad-Unidade";
import ListaUnidades from "./components/Lista-Unidades";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<TemplatePage />}>
          <Route index element={<Painel />} />
          <Route path="/Unidades" element={<Unidades />}>
            <Route index element={<ListaUnidades />} />
            <Route
              path="/Unidades/cadastro-unidade"
              element={<CadUnidade />}
            ></Route>
          </Route>
          <Route path="/Cadastros" element={<Cadastros />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
