const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./config/db');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'application de suivi des alternants');
});

const alternantsRouter = require('./routes/alternants');
app.use('/alternants', alternantsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
