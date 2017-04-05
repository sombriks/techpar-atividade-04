const express = require('express');
const knex = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/list', (req, res) => {
    knex("pessoa").select().then((ret) => res.send(ret).status(200));
});

app.post('/save', (req, res) => {
    let pessoa = req.body;
    knex("pessoa").insert(pessoa, 'id_pessoa')
        .then((ret) => {
            pessoa.id_pessoa = ret[0];
            res.send(pessoa).status(200);
        }).catch((err) => {
            console.log(err);
            res.send().status(500);
        });
});

knex.migrate.latest();

module.exports = app;