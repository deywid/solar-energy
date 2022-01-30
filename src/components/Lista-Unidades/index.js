import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ListaUnidades() {
  const navigate = useNavigate();

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/unidades").then(function (response) {
      setLista(response.data);
    });
  }, []);

 
  async function handleDelete(id) {
    axios.delete(`http://localhost:3333/unidades/${id}`)
   
    setLista(lista.filter((item) => item.id !== id));
  }

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
                <button type="button" onClick={() => navigate(`/Unidades/cadastro-unidade/${li.id}`, {state: li})}>Editar</button>
              </td>
              <td className="tg-0lax">
                <button type="button" onClick={() => handleDelete(li.id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => navigate("/Unidades/cadastro-unidade")}
      >
        Nova unidade
      </button>
    </>
  );
}

export default ListaUnidades;
