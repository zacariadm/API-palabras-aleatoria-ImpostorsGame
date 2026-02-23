const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const wordsRoute = require('./routes/wordsRoute.js');
const wordsAnimalesRoute = require('./routes/wordsAnimalesRoute.js');
const wordsComponentesOrdenadorRoute = require('./routes/wordsComponentesOrdenadorRoute.js');
const wordsComunidadesAutonomasEspanaRoute = require('./routes/wordsComunidadesAutonomasEspana.js');
const wordsDeportesRoute = require('./routes/wordsDeportesRoute.js');
const wordsGeneralRoute = require('./routes/wordsGeneralRoute.js');
const wordsJuegosRoute = require('./routes/wordsJuegosRoute.js');
const wordsMarcasCocheRoute = require('./routes/wordsMarcasCocheRoute.js');
const wordsMarcasRelojesRoute = require('./routes/wordsMarcasRelojesRoute.js');
const wordsObjetoComunesRoute = require('./routes/wordsObjetoComunesRoute.js');
const wordsPaisesRoute = require('./routes/wordsPaisesRoute.js');
const wordsPrendasRopaRoute = require('./routes/wordsPrendasRopaRoute.js');
const wordsTiposEdificioRoute = require('./routes/wordsTiposEdificioRoute.js');
const categoriesRoute = require('./routes/categoriesRoute.js');

app.use('/api', wordsRoute);
app.use('/api', wordsAnimalesRoute);
app.use('/api', wordsComponentesOrdenadorRoute);
app.use('/api', wordsComunidadesAutonomasEspanaRoute);
app.use('/api', wordsDeportesRoute);
app.use('/api', wordsGeneralRoute);
app.use('/api', wordsJuegosRoute);
app.use('/api', wordsMarcasCocheRoute);
app.use('/api', wordsMarcasRelojesRoute);
app.use('/api', wordsObjetoComunesRoute);
app.use('/api', wordsPaisesRoute);
app.use('/api', wordsPrendasRopaRoute);
app.use('/api', wordsTiposEdificioRoute);
app.use('/', categoriesRoute);

app.listen(port, () => console.log('Server running in port ' + port));