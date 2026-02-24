const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const wordsRoute = require('./routes/wordsRoute.js');
const wordsByCategoryRoute = require('./routes/wordsByCategoryRoute.js');
const wordsAnimalesRoute = require('./routes/wordsAnimalesRoute.js');
const categoriesRoute = require('./routes/categoriesRoute.js');

app.use('/api', wordsRoute);
app.use('/api', wordsByCategoryRoute);
app.use('/', categoriesRoute);

app.listen(port, () => console.log('Server running in port ' + port));