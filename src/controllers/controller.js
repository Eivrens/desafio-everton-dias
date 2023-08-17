function checkoutPedido(arrayPedidos) {
    const arrayMap = {};

    arrayPedidos.forEach((item) => {
        const { codigo, descricao, tipo, valor } = item;
        if (arrayMap[codigo]) {
            arrayMap[codigo].valor += valor;
            arrayMap[codigo].quantidade += 1;
        } else {
            arrayMap[codigo] = {
                codigo,
                descricao,
                tipo,
                valor,
                quantidade: 1,
            };
        }
    });

    const arrayTratada = Object.values(arrayMap);

    return arrayTratada;
}

function somarTotal(arrayPrisma, arrayComQtd) {
    const somaTotal = arrayComQtd.reduce((total, item) => {
        const partes = item.split(",");
        const codigo = partes[0];
        const quantidade = parseInt(partes[1]);

        const arrayPoint = arrayPrisma.find((dado) => dado.codigo === codigo);

        if (arrayPoint) {
            return total + arrayPoint.valor * quantidade;
        } else {
            return total;
        }
    }, 0);

    return somaTotal;
}

function processarPagamento(valor, formaPagamento) {
  let valorFinal = valor;
  
  if (formaPagamento === 1) { //Dinheiro: -5%
    valorFinal *= 0.95; 
  } else if (formaPagamento === 2) { //Crédito: +3%
    valorFinal *= 1.03; 
  }

  valorFinal = parseFloat(valorFinal.toFixed(2));
  valorFinal = valorFinal.toString().replace('.', ',');

  return valorFinal;

}


function arrayDoCaixa(array) {
    const arrayResumida = [];

    for (let i = 0; i < array.length; i++) {
        let strArr = array[i].codigo + "," + array[i].quantidade;
        arrayResumida.push(strArr);
    }
    return arrayResumida;
}

export default {
    checkoutPedido,
    processarPagamento,
    arrayDoCaixa,
    somarTotal,
};
