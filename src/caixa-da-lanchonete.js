import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const cardapio = await prisma.lanche.findMany();

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        

        return "";
    }

}

export { CaixaDaLanchonete };
