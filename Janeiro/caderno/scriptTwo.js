import { createConnection } from 'mysql2';

// Cria uma conexão com o banco de dados MySQL
const connection = createConnection({
    host: 'localhost',
    user: 'lucas',
    password: 'saplukA@2500',
    database: 'caderno'
});

// Conecta ao banco de dados
connection.connect();

// Seleciona todos os elementos HTML com a classe '.diciplina'
const disciplinas = document.querySelectorAll('.disciplina');

// Seleciona os elementos HTML com os IDs 'txttema' e 'descricao'
const tema = document.getElementById('txttema');
const descricao = document.getElementById('descricao');

// Seleciona o elemento HTML com o ID 'salvar'
const salvar = document.getElementById('salvar');

// Armazena a disciplina escolhida
let disciplina = null;

// Função chamada quando uma disciplina é escolhida
const disciplinaEscolhida = (event) => {
     disciplina = op[event.target.value];
};

// Mapa os elementos HTML com os IDs 'desenv', 'pesquisa', 'topicos' e 'web'
const op = {
    'desenv': document.getElementById('desenv'),
    'pesquisa': document.getElementById('pesquisa'),
    'topicos': document.getElementById('topicos'),
    'web': document.getElementById('web')
};

// Função para inserir os dados no banco de dados
function insert(){
   // Adicionei uma atribuição para pegar o valor dos inputs ao invés de pegá-lo na declaração da variável
    const tema = document.getElementById('txttema').value;
    const descricao = document.getElementById('descricao').value;

    // Substitui NOW() por uma chamada ao método Date.now() para pegar a data atual
    const sql = `INSERT INTO dados (disciplina, tema, descricao, data) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [disciplina, tema, descricao, Date.now()], (error, results) => {
    if (error) throw error;
    console.log('Dados inseridos com sucesso!');
    });
}

// Adiciona um evento de clique para todos os elementos com a classe '.disciplina'
disciplinas.forEach(disciplina => {
    disciplina.addEventListener('click', disciplinaEscolhida);
});

// Adiciona um evento de clique para o elemento 'salvar'
salvar.addEventListener('click', insert);
