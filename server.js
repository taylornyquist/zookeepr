const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// anytime a client navicates to <ourhost>/api the app will use the router we setup in apiRoutes
app.use('/api', apiRoutes);
// if "/" is our endpoint, then the router will serve back our HTML routes
app.use('/', htmlRoutes);

// tells app (aka: express.js) to use our public folder
app.use(express.static('public'));

// the next four functions were moved to /lib/animals.js

// app API routes moved to /routes/apiRoutes/animalRoutes.js

// HTML routes moved to /routes/htmlRoutes/index.js

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});