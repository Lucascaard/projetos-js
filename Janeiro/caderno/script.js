import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'localhost',
    user: 'lucas',
    password: 'saplukA@2500',
    database: 'caderno'
  });
connection.connect();

const disciplinas = document.querySelectorAll('.diciplina');
const tema = document.getElementById('txttema').value;
const descricao = document.getElementById('descricao').value;
const salvar = document.getElementById('salvar');
let disciplina = null;

const disciplinaEscolhida = (event) => {
     disciplina = op[event.target.value];
};

const op = {
    'desenv': document.getElementById('desenv').value,
    'pesquisa': document.getElementById('pesquisa').value,
    'topicos': document.getElementById('topicos').value,
    'web': document.getElementById('web').value
};



function insert(){

    const sql = `INSERT INTO dados (disciplina, tema, descricao, data) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [disciplina, tema, descricao, NOW()], (error, results) => {
    if (error) throw error;
    console.log('Dados inseridos com sucesso!');
    });
    }

disciplinas.addEventListener('click', disciplinaEscolhida);
salvar.addEventListener('click', insert);