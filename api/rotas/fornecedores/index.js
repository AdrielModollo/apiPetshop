const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.criar()
    resposta.send(
            JSON.stringify(resultados)
    )
})

roteador.get('/:idFornecedor', (requisicao, resposta) => {
    try {
    const id = requisicao.params.idFornecedor({ id: id})
    const fornecedor = new Fornecedor({ id: id})
    await fornecedor.carregar()
    resposta.send(
        JSON.stringify(fornecedor)
    )
    } catch (erro){
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

module.exports = roteador