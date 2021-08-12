const express = require('express');
const { search, detail } = require('./routes/movies');
const app = express();

app.use(express.json());

app.get('/search', search);
app.get('/detail/:id', detail);

app.listen(8080, () => {
    console.log('listening ....');
})