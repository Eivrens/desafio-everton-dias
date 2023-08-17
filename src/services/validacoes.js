function validarPesquisa(pedido) {
    if (isNaN(pedido[0])) {
        return "codigo";
    } else {
        return "id";
    }
}

function validarExtra(arrayPrisma, arrayComQtd) {
    const arrayAux = [];
    let extraValido = true;
    let principal = " ";

    for (let i = 0; i < arrayComQtd.length; i++) {
        let codigo = arrayComQtd[i].split(",")[0];
        arrayAux.push(codigo);
    }

    for (let i = 0; i < arrayPrisma.length; i++) {
        let descricao = arrayPrisma[i].descricao.split("(")[1];

        for (let j = 0; j < arrayAux.length; j++) {
            if (arrayAux[j] !== principal) {
                extraValido = true;
            }
        }
    }

    return extraValido;
}

export default {
    validarPesquisa,
    validarExtra,
};
