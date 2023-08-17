import { PrismaClient } from "@prisma/client";

import controller from "./controllers/controller.js";
import validacoes from "./services/validacoes.js";

const prisma = new PrismaClient();

const cardapio = await prisma.lanche.findMany();
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const valorParcial = controller.somarTotal(cardapio, itens);
        
        const pedidoExtra = validacoes.validarExtra(cardapio, itens);
        const valorFinal = controller.processarPagamento(valorParcial, metodoDePagamento);


        if (!pedidoExtra) {
            return "Item extra não pode ser pedido sem o principal";
            index.menuInicial()
        } else if (itens == []) {
            return "Não há itens no carrinho de compra!"
        } else return `R$ ${valorFinal}`

    }

}

export { CaixaDaLanchonete };
