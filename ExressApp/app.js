const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ 'message': 'Hello World!!!' });
});

var express_port = process.env.PORT || PORT;
app.listen(express_port, () => {
    console.log(`Listening on port: ${express_port}`);
});