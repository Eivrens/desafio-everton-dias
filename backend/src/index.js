import app from './app.js';

const port = 4444;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });