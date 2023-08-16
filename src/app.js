import exp from 'express';
import rotas from './routes.js'
import cors from 'cors';

const app = exp();

app.use(exp.json());
app.use(cors())
app.use(rotas);

export default app;