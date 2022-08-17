const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000 || process.env;

const personRoute = require('./routes/personRoute');
app.use(cors());
app.use(express.json());

app.use('/person', personRoute);

app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}/person`);
})