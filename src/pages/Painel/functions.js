/* Dashboard MathOps */
export const totalUnidades = (unidades) => {
  return unidades.length;
};

export const totalAtivo = (unidades) => {
  return unidades.filter((elem) => elem.ativo).length;
};

export const totalInativo = (unidades) => {
  return unidades.filter((elem) => !elem.ativo).length;
};

export const mediaEnergia = (geracao) => {
  const totalEnergia = geracao.reduce((acum, elem) => {
    return acum + +elem.total_gerado;
  }, 0);
  const media = totalEnergia / getMeses(geracao).length;
  return media.toFixed(0);
};

/* returns an ordered by month array with the monthly total production */
export function getTotalGeradoMes(geracao) {
  const groupBy = geracao.reduce(function (acum, elem) {
    const mes = new Date(elem.data).getMonth();
    acum[mes] = acum[mes] || [];
    acum[mes].push(elem.total_gerado);
    return acum;
  }, Object.create(null));

  const soma = [];

  for (let val of Object.values(groupBy)) {
    soma.push(
      val.reduce(function (acum, elem) {
        return acum + +elem; //parse
      }, 0)
    );
  }
  return soma;
}

/* returns an ordered by month array with the months string name */
export function getMeses(geracao) {
  const meses = [
    ...new Set(
      geracao.map((elem) =>
        new Date(elem.data).toLocaleString("pt-br", { month: "long" })
      )
    ),
  ];

  const strMeses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const sortear = (acum, elem) => {
    return strMeses.indexOf(acum) - strMeses.indexOf(elem);
  };

  meses.sort(sortear);

  return meses;
}
