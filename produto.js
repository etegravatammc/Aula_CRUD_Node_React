const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


function createProduto(nome, preco, descricao) {
        // Criando um novo  produto
    (async () => {
        const novoProduto = await produto.create({
            nome: nome,
            preco: preco,
            descricao: descricao
        });
        console.log('Novo produto criado:', novoProduto.toJSON());
    })
}
/*
function createUsuario(nome, email, senha) {
            const novoUsuario = await usuario.create({
            nome: nome,
            email: email,
            senha: senha
        });
        console.log('Novo usuário criado:', novoUsuario.toJSON());


        // Consultando todos os produtos e usuários
function consultarProdutosEUsuarios() {     
        const produtos = await produto.findAll();
        console.log('Produtos encontrados:', produtos.map(produto => produto.toJSON()));

        const usuarios = await usuario.findByPk(1);
        console.log('Usuários encontrados:', usuarios.toJSON());
}

        // Atualizando um produto existente
function atualizarProduto() {
        const produtoExistente = await produto.findByPk(1);
        produtoExistente.preco = 228000.00;
        const produtoAtualizado = await produtoExistente.save();
        console.log('Produto atualizado:', produtoAtualizado.toJSON());
}

        // Deletando um produto existente
function deletarProduto() { 
        const produtoParaDeletar = await produto.findByPk(1);
        await produtoParaDeletar.destroy();
        console.log('Produto deletado com sucesso.');
}
*/
module.exports = Produto;
