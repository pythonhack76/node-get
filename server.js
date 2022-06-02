
const express = require('express');
const app = express(); 
const path = require('path');

const PORT = process.env.PORT || 3501;

app.get('^/$|/index(.html)?', (req, res) => {

    //res.send('Ciao a tutti');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});


app.get('^/$|/inde(.html)?', (req, res) => {

    //res.send('Ciao a tutti');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});


app.get('/new-page(.html)?', (req, res) => {

    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));

});


app.get('/old-page(.html)?', (req, res) => {

    res.redirect('/new-page.html');//302 default

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));