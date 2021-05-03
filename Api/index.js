const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8085;

app.get('/', (req, res, next) => {
    res.send('welcome to my api ...');
});

app.get('/suma', (req, res, next) => {
    var elemento1 = req.query.elemento1;
    var elemento2 = req.query.elemento2;

    var resultado = parseFloat(elemento1) + parseFloat(elemento2);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/resta', (req, res, next) => {
    var elemento1 = req.query.elemento1;
    var elemento2 = req.query.elemento2;

    var resultado = parseFloat(elemento1) - parseFloat(elemento2);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/multi', (req, res, next) => {
    var elemento1 = req.query.elemento1;
    var elemento2 = req.query.elemento2;

    var resultado = (elemento1 * elemento2);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/divid', (req, res, next) => {
    var elemento1 = req.query.elemento1;
    var elemento2 = req.query.elemento2;

    var resultado = (elemento1 / elemento2);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.get('/potencia', (req, res, next) => {
    var elemento1 = req.query.elemento1;
    var elemento2 = req.query.elemento2;

    var resultado = Math.pow(elemento1, elemento2);
    var objResult = {
        resultado: resultado
    }
    res.send(objResult);
});

app.listen(port, () => 
    console.log('listening on port ' + port)
);