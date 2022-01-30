import React from "react";

import { Card, CardContainer, CardTitle, CardValue } from "./style";

function Cards({ tUnidades, tAtivo, tInativo, media }) {
  return (
    <CardContainer>
      <Card>
        <CardTitle>Total de unidades</CardTitle>
        <CardValue>{tUnidades}</CardValue>
      </Card>
      <Card>
        <CardTitle>Unidades ativas</CardTitle>
        <CardValue>{tAtivo}</CardValue>
      </Card>
      <Card>
        <CardTitle>Unidades inativas</CardTitle>
        <CardValue>{tInativo}</CardValue>
      </Card>
      <Card>
        <CardTitle>Média de energia</CardTitle>
        <CardValue>{media} kW</CardValue>
      </Card>
    </CardContainer>
  );
}

export default Cards;
