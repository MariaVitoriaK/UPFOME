const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

port = 3001;

app.get('/api/v1/hello', (requisicao, resposta) => {
  resposta.status(201).send('Hello World!');
});

app.get('/api/v1/MariaVitoriaKuhn', (requisicao, resposta) => {
  resposta.status(404).send('Maria Vitória Kuhn');
});

//app.get('/api/v1/temperatura', (requisicao, resposta) => {
//  resposta.status(200).send('Hoje está 12 graus');
//});

app.post('/api/v1/convert_to_farenheit', (req, res) => {
    // console.log(req.body.temperatura);
    let farenheit = (req.body.temperatura * 1.8) + 32;
    res.status(200).send(`A conversão de  ${req.body.temperatura} é igual a ${farenheit}`);
});

app.post('/api/v1/convert_to_celsius', (req, res) => {
    // console.log(req.body.temperatura);
    let celsius = (req.body.temperatura - 32) / 1.8;
    res.status(200).send(`A conversão de  ${req.body.temperatura} é igual a ${celsius}`);
});

app.listen(port, () => {
    console.log("Server UP");
})