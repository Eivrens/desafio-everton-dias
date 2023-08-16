import { Router } from 'express';
import controller from './controllers/controller.js';

const rotas = Router();

//ROTAS DE LANCHES:
rotas.get('/', controller.getAll);
rotas.get('/search', controller.getSearch);

export default rotas;
