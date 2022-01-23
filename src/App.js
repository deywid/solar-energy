import "./App.css";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Painel from "./pages/Painel";
import Unidades from "./pages/Unidades";
import Cadastros from "./pages/Cadastros";
import CadUnidade from './components/Form-Cad-Unidade'
import ListaUnidades from './components/Lista-Unidades'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Painel />} />
        <Route path="/Unidades" element={<Unidades />}>
          <Route path="/Unidades/" element={<ListaUnidades />}></Route>
          <Route path="/Unidades/cadastro-unidade" element={<CadUnidade />}></Route>
        </Route>
        <Route path="/Cadastros" element={<Cadastros />} />
      </Routes>
    </>
  );
}

export default App;
