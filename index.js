(async () => {
  const database = require('./db');
  const Produto = require('./produto');
  const usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso.', resultado);

        const novoUsuario = await usuario.create({
            nome: 'Epitacio Silva',
            email: 'epitacio.silva@example.com',
            senha: 'senha123'
        });
        console.log('Novo usuário criado:', novoUsuario.toJSON());

        const novoProduto = await Produto.create({
            nome: 'Fiat Uno',
            preco: 199000.99,
            descricao: 'Carro popular e econômico. Incluso: escada'
        });
        console.log('Novo produto criado:', novoProduto.toJSON());


        const produtos = await Produto.findAll();
        console.log('Produtos encontrados:', produtos.map(produto => produto.toJSON()));

        const usuarios = await usuario.findByPk(1);
        console.log('Usuários encontrados:', usuarios.toJSON());

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();