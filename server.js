const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.get('/', (req, res) => {
    console.log('Alguém acessou o DevShelf!');
    res.send("🚀 DevShelf está online!");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`DevShelft rodando em http://localhost:${PORT}`);
});