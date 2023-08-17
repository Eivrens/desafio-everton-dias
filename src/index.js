import rl from "readline-sync";
import { PrismaClient } from "@prisma/client";

//import controller from "./controllers/controller.js";
import validacoes from "./services/validacoes.js";
import controller from "./controllers/controller.js";
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const prisma = new PrismaClient();

async function menuInicial() {
    console.log(
        "=============================================================================="
    );
    console.log(
        "|                     BEM-VINDO A LANCHONETE <DB>                            |"
    );
    console.log(
        "| 1 -> Realizar PEDIDO | 2 -> Visualizar Cardápio | 3 -> Gerenciar cardápio  |"
    );
    console.log(
        "=============================================================================="
    );

    let opcao = rl.questionInt("Digite uma OPCAO: ");
    console.log(
        "=============================================================================="
    );

    switch (opcao) {
        case 1:
            await menuRealizarPedido();
            menuInicial();
            break;
        case 2:
            const cardapio = await prisma.lanche.findMany();
            console.table(cardapio);
            menuInicial();
            break;
        case 3:
            menuGerenciarCardápio();
            menuInicial();
            break;
        default:
            console.log("Digite uma OPÇÃO VÁLIDA!");
            menuInicial();
            break;
    }
}

async function menuRealizarPedido() {
    const listPedidos = [];
    let continuar, pedido, formaPagamento;

    const cardapio = await prisma.lanche.findMany();

    do {
        console.table(cardapio);

        pedido = rl.question("Informe o ID ou CODIGO do pedido: ");
        console.log("==============================================================================");

        if (validacoes.validarPesquisa(pedido) == "codigo" ) {
            const objPedido = await prisma.lanche.findUnique({
                where: {
                    codigo: pedido,
                },
            });
            listPedidos.push(objPedido);

        } else if (validacoes.validarPesquisa(pedido) == "id") {
            const objPedido = await prisma.lanche.findUnique({
                where: {
                    id: parseInt(pedido),
                },
            });
            listPedidos.push(objPedido);
            
        } else {
            console.log(
                "Produto não encontrado! Por favor, informe um CÓDIGO ou ID válido."
            );
            menuRealizarPedido();
            console.log(listPedidos);
        }

        continuar = rl.question("Deseja continuar a compra (s/n)? ");
    } while (continuar == "s");

    do {
        console.log("==============================================================================");
        console.log("|          CARRINHO FECHADO! Agora informe a forma de pagamento:             |");
        console.log("|               1 -> Dinheiro | 2 -> Débito | 3 -> Crédito                   |");
        console.log("==============================================================================");

        formaPagamento = rl.questionInt("Forma de PAGAMENTO: "); 

        if(formaPagamento > 3) {console.log("Digite uma opção válida!")}

    } while (formaPagamento > 3);

    const arrayComQtd = controller.checkoutPedido(listPedidos);

    console.log(controller.arrayDoCaixa(arrayComQtd));
    
    console.log(new CaixaDaLanchonete().calcularValorDaCompra(formaPagamento, controller.arrayDoCaixa(arrayComQtd)));

    
}

function menuGerenciarCardápio() {
    console.log("CRUD/Função disponível na próxima versão com interface React! ;D");
    menuInicial();
}

menuInicial();

export default {
    menuInicial
}
