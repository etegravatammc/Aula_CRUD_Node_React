(async () => {
  const database = require('./db');
  const Produto = require('./produto');
  const usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso.', resultado);

        const novoUsuario = await usuario.create({
            nome: 'João Silva',
            email: 'joao.silva@example.com',
            senha: 'senha123'
        });
        console.log('Novo usuário criado:', novoUsuario.toJSON());

        const novoProduto = await Produto.create({
            nome: 'Produto Exemplo',
            preco: 19.99,
            descricao: 'Descrição do produto exemplo.'
        });
        console.log('Novo produto criado:', novoProduto.toJSON());

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();