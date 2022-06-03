
const { tr } = require('date-fns/locale');
const express = require('express');
const app = express(); 
const { logger , timing } = require('./middleware/logEvents');
const path = require('path');


const PORT = process.env.PORT || 3501;

//custom middleware logger
app.use(logger); 
app.use(timing);

// app.use((req, res, next) => {
//     logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLogNew.txt');

//     console.log(`${req.method} ${req.path}`);
//     next(); 
// }); 

//middleware urlencoded
app.use(express.urlencoded({ extended: false }));

//json middleware
app.use(express.json()); 

//serve static files
app.use(express.static(path.join(__dirname, '/public')));



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


const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next(); 
}

const three = (req, res) => {
    console.log('three');
    res.send('piuaciuto che è già finito...?!');
   
}

app.get('/chain(.html)?', [one, two, three]);


//routes gestione 
app.get('/test(.html)?', (req, res, next) => {
    console.log('in attesa del caricmaneto del file...');
    next() 
}, (req, res) => {
        res.send('ciao a tutti');
})

//gestione della 404 
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

let bad_words = ['cazzo','minchia','merda','fica','troia'];


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));