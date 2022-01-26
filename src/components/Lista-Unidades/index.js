import React from "react";
import { useNavigate } from "react-router-dom";

function ListaUnidades() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Lista de unidades</h2>

      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">ID</th>
            <th className="tg-0lax">Apelido</th>
            <th className="tg-0lax">Local</th>
            <th className="tg-0lax">Marca</th>
            <th className="tg-0lax">Modelo</th>
            <th className="tg-0lax">X</th>
            <th className="tg-0lax">..</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
            <td className="tg-0lax"></td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate("/Unidades/cadastro-unidade")}>
        Nova unidade
      </button>
    </>
  );
}

export default ListaUnidades;
