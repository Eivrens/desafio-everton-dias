import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//GET: Envia todos os lanches para compor a tela inicial
const getAll = async (req, res) => {
    const cardapio = await prisma.lanche.findMany();

    return res.status(200).json(cardapio);
}

//GET: Envia um filtro de resultado da barra de pesquisa
const getSearch = async (req, res) => {
    const result = await prisma.lanche.findMany({
        where: {
            descricao: {
                contains: req.body.search
            }
        }
    });

    return res.status(200).json(result);
}

export default {
    getAll,
    getSearch
}