const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());


const holderRoutes = require('./routes/holderRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const entryRoutes = require('./routes/entryRoutes');

app.use('/api/holder', holderRoutes);
app.use('/api/laptop', laptopRoutes);
app.use('/api/entry', entryRoutes);


mongoose.connect(process.env.MONGODB_CNX, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log('Error en la conexión a la base de datos:', error));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
