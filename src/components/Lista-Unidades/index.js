import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ListButton, PageButton } from "../Buttons";
import { SubTitle } from "../Title/style";
import { TabContainer, ButtonContainer, TableList } from "./style";

function ListaUnidades() {
  const navigate = useNavigate();

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/unidades").then(function (response) {
      setLista(response.data);
    });
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:3333/unidades/${id}`);
    setLista(lista.filter((item) => item.id !== id));
  }

  return (
    <TabContainer>
      <SubTitle>Lista de unidades</SubTitle>
      <TableList>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lista.map((li) => (
            <tr key={li.id}>
              <td>{li.id}</td>
              <td>{li.apelido}</td>
              <td>{li.local}</td>
              <td>{li.marca}</td>
              <td>{li.modelo}</td>
              <td>
                <ListButton
                  primary
                  onClick={() =>
                    navigate(`/Unidades/cadastro-unidade/${li.id}`, {
                      state: li,
                    })
                  }
                >
                  Editar
                </ListButton>
              </td>
              <td>
                <ListButton type="button" onClick={() => handleDelete(li.id)}>
                  Remover
                </ListButton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableList>
      <ButtonContainer>
        <PageButton
          maxWidth={"252px"}
          primary
          onClick={() => navigate("/Unidades/cadastro-unidade")}
        >
          Nova unidade
        </PageButton>
      </ButtonContainer>
    </TabContainer>
  );
}

export default ListaUnidades;
