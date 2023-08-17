function validarPesquisa (pedido) {
    if(isNaN(pedido[0])) {
        return "codigo"
    } else {
        return "id"
    }

}

function validarExtra(arrayPedidos) {
    
}
export default {
    validarPesquisa
}