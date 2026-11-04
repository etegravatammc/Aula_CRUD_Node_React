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

async function createProduto(nome, preco, descricao) {
    try {
        const novoProduto = await Produto.create({
            nome: nome,
            preco: preco,
            descricao: descricao
        });
        console.log('Novo produto criado:', novoProduto.toJSON());
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }
}

async function consultarProdutos() {
    try {
        const produtos = await Produto.findAll();
        console.log('Produtos encontrados:', produtos.map(produto => produto.toJSON()));
    } catch (error) {
        console.error('Erro ao consultar produtos:', error);
    }
}

async function consultarCodProdutos(id) {
    try {
        const produtos = await Produto.findByPk(id);
        console.log('Produtos encontrados:', produtos.toJSON());
    } catch (error) {
        console.error('Erro ao consultar produtos:', error);
    }
}

async function atualizarProduto(id, nome, preco, descricao) {
    try {
        const produto = await Produto.findByPk(id);
        if (produto) {
            produto.nome = nome;
            produto.preco = preco;
            produto.descricao = descricao;
            await produto.save();
            console.log('Produto atualizado:', produto.toJSON());
        } else {
            console.log('Produto não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
    }
}

async function deletarProduto(id) {
    try {
        const produto = await Produto.findByPk(id);
        if (produto) {
            await produto.destroy();
            console.log('Produto deletado com sucesso.');
        } else {
            console.log('Produto não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
    }
}

module.exports = {
    Produto,
    createProduto,
    consultarProdutos,
    consultarCodProdutos,
    atualizarProduto,
    deletarProduto
};