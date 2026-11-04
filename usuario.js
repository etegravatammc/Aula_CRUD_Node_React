const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
        
});

async function createUsuario(nome, email, senha) {
    try {
        const novoUsuario = await Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        });
        console.log('Novo usuário criado:', novoUsuario.toJSON());
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}

async function consultarUsuarios() {
    try {
        const usuarios = await Usuario.findAll();
        console.log('Usuários encontrados:', usuarios.map(usuario => usuario.toJSON()));
    } catch (error) {
        console.error('Erro ao consultar usuários:', error);
    }
}

async function consultarCodUsuarios(id) {
    try {
        const usuarios = await Usuario.findByPk(id);
        console.log('Usuários encontrados:', usuarios.toJSON());
    } catch (error) {
        console.error('Erro ao consultar usuários:', error);
    }
}

async function atualizarUsuario(id, nome, email, senha) {
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            usuario.nome = nome;
            usuario.email = email;
            usuario.senha = senha;
            await usuario.save();
            console.log('Usuário atualizado:', usuario.toJSON());
        } else {
            console.log('Usuário não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

async function deletarUsuario(id) {
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            await usuario.destroy();
            console.log('Usuário deletado com sucesso.');
        } else {
            console.log('Usuário não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

module.exports = {
    Usuario,
    createUsuario,
    consultarUsuarios,
    consultarCodUsuarios,
    atualizarUsuario,
    deletarUsuario
};;
