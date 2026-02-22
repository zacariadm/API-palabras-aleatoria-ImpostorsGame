const express = require('express')
const wordRoute = require('./routes/wordsRoute.js')
const wordAnimalsRoute = require('./routes/wordsAnimalsRoute.js')
const wordObjectsRoute = require('./routes/wordsObjectsRoute.js')
const categoriesRoute = require('./routes/categoriesRoute');
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use('/api', wordRoute)
app.use('/api', wordAnimalsRoute)
app.use('/api', wordObjectsRoute)
app.use('/', categoriesRoute);

// listen
app.listen(port, () => console.log('Server running in port '+ port))