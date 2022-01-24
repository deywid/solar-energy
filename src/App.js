import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./components/Menu";
import Login from "./pages/Login";
import Painel from "./pages/Painel";
import Unidades from "./pages/Unidades";
import Cadastros from "./pages/Cadastros";
import CadUnidade from "./components/Form-Cad-Unidade";
import ListaUnidades from "./components/Lista-Unidades";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Login" && <Menu />}
      <Routes>
        <Route path="/" element={<Painel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Unidades" element={<Unidades />}>
          <Route index element={<ListaUnidades />}></Route>
          <Route
            path="/Unidades/cadastro-unidade"
            element={<CadUnidade />}
          ></Route>
        </Route>
        <Route path="/Cadastros" element={<Cadastros />} />
      </Routes>
    </>
  );
}

export default App;
