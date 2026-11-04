const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const database = require('./db');
const { 
    createProduto, 
    consultarProdutos, 
    consultarCodProdutos, 
    atualizarProduto, 
    deletarProduto 
} = require('./produto');
const usuario = require('./usuario'); // Caso queira manter os prompts lá

(async () => {
    try {
        await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        // Criando a interface do readline
        const rl = readline.createInterface({ input, output });

        let executando = true;
        while (executando) {
            const menu = '\nEscolha uma opção:\n' +
                         '1. Criar Produto\n' +
                         '2. Consultar Produtos\n' +
                         '3. Consultar Produto por ID\n' +
                         '4. Atualizar Produto\n' +
                         '5. Deletar Produto\n' +
                         '6. Sair\n' +
                         'Opção: ';

            // Usa o await para pausar e esperar o usuário digitar algo no terminal
            const opcao = await rl.question(menu);

            switch (opcao.trim()) {
                case '1': {
                    const nome = await rl.question('Digite o nome do produto: ');
                    const preco = parseFloat(await rl.question('Digite o preço do produto: '));
                    const descricao = await rl.question('Digite a descrição: ');
                    await createProduto(nome, preco, descricao);
                    break;
                }
                case '2':
                    await consultarProdutos();
                    break;
                case '3': {
                    const idConsultar = await rl.question('Digite o ID do produto: ');
                    await consultarCodProdutos(idConsultar);
                    break;
                }
                case '4': {
                    const idAtualizar = await rl.question('Digite o ID do produto a atualizar: ');
                    const novoNome = await rl.question('Novo nome: ');
                    const novoPreco = parseFloat(await rl.question('Novo preço: '));
                    const novaDescricao = await rl.question('Nova descrição: ');
                    await atualizarProduto(idAtualizar, novoNome, novoPreco, novaDescricao);
                    break;
                }
                case '5': {
                    const idDeletar = await rl.question('Digite o ID do produto que deseja deletar: ');
                    await deletarProduto(idDeletar);
                    break;
                }
                case '6':
                    console.log('Saindo do programa...');
                    executando = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }

        rl.close(); // Fecha a interface do terminal ao sair
        process.exit(0);

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados ou executar o menu:', error);
    }
})();