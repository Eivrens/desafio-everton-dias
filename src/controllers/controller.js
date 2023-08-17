function checkoutPedido(arrayPedidos) {
    const arrayMap = {};

    arrayPedidos.forEach(item => {
        const { codigo, descricao, tipo, valor } = item;
        if (arrayMap[codigo]) {
          arrayMap[codigo].valor += valor;
          arrayMap[codigo].quantidade += 1;
        } else {
          arrayMap[codigo] = { codigo, descricao, tipo, valor, quantidade: 1 };
        }
      });

      const arrayTratada = Object.values(arrayMap);

      return arrayTratada;
}

function processarPagamento(formaPagamento) {
    if (condition) {
        
    } else {
        
    }
}

function arrayDoCaixa(array) {
    const arrayResumida = []

    for (let i = 0; i < array.length; i++) {
        let strArr = array[i].codigo + "," + array[i].quantidade
        arrayResumida.push(strArr);
    }
    return arrayResumida;
}

export default {
    checkoutPedido,
    processarPagamento,
    arrayDoCaixa
}