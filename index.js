(async () => {
  const database = require('./db');
  const produto = require('./produto');
  const usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso.', resultado);

        createProduto('Fiat Uno', 199000.99, 'Carro popular e econômico. Incluso: escada');


    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();