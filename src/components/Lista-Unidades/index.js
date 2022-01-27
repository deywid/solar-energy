import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListaUnidades() {
  const navigate = useNavigate();

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/unidades").then(function (response) {
      console.log(response.data);
      setLista(response.data);
    });
  }, []);

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
            <th className="tg-0lax"></th>
            <th className="tg-0lax"></th>
          </tr>
        </thead>
        <tbody>
          {lista.map((li) => (
            <tr key={li.id}>
              <td className="tg-0lax">{li.id}</td>
              <td className="tg-0lax">{li.apelido}</td>
              <td className="tg-0lax">{li.local}</td>
              <td className="tg-0lax">{li.marca}</td>
              <td className="tg-0lax">{li.modelo}</td>
              <td className="tg-0lax">
                <button>Editar</button>
              </td>
              <td className="tg-0lax">
                <button>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/Unidades/cadastro-unidade")}>
        Nova unidade
      </button>
    </>
  );
}

export default ListaUnidades;
