const express = require('express');
const app = express();
const PORT = 3000 || process.env;

const personRoute = require('./routes/personRoute');

app.use(express.json());

app.use('/person', personRoute);

app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}/person`);
})