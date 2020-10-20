//  chamando para o projeto
const Database = require('sqlite-async');
// pedindo para abrir o diretorio do momento  e criar esse arquivo database.
// na primeira vez ele vai criar o arquivo, mas na segunda vez q rodar ele vai so abrir
// como carrega linha a linha (e nao necessariamente a linha anterior terminou pra rodar a proxima), poderia acontecer dessa linha demorar para finalizar e o codigo seguir rodando a proxima linha sem antes carregar o banco de dados. Por esse motivo usa-se o "then" que nesse momento ai esta garantindo (prometendo) que vai executar a funçao q roda o banco de dados "db" para assim seguir com o código.

function execute(db){
    //  vou pedir para ele criar uma tabela dentro do banco de dados SE não existir
    // criando as colunas da tabela:
    // id: criar um id
    //  INTEGER: um numero inteiro
    //  PRIMARY KEY: que esse é o identificado do orfanato
    // AUTOINCREMENT: preenche automaticamente de forma crescente (incrementa)
    // Essa funcao retorna o "db" para o "execute". 
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

// um objeto q vai pegar o resultado desse "Database" e jogar pra fora "exportar"
// o resultado é o "db"   
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
