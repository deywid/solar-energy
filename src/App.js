import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Painel from "./components/Painel";
import Unidades from "./components/Unidades";
import Cadastros from "./components/Cadastros";
import CadUnidade from "./components/Unidades/Form-Cad-Unidade";
import ListaUnidades from "./components/Unidades/Lista-Unidades";
import TemplatePage from "./pages/TemplatePage";

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
