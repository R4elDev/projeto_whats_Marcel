const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request,response,next) =>{
    response.header('Access-Control-Allow-Origin','*')

    response.header('Access-Control-Allow-Methods','GET')

    app.use(cors())

    next()
})

const zap = require('./modulo/funcoes.js')

app.get('/v1/whatsapp/dados-usuarios/:tell',cors(),async function(request,response){
    let telefone = request.params.tell

    let dadosWhats = zap.getDadosPessoaisPorUsuario(telefone)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/whatsapp/dados-conta-usuario/:tell',cors(),async function(request,response){
    let telefone = request.params.tell

    let dadosWhats = zap.getDadosContaDoUsuario(telefone)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/whatsapp/contatos-para-usuarios/:tell',cors(),async function(request,response){
    let telefone = request.params.tell

    let dadosWhats = zap.getDadosDeContatosParaCadaUsuario(telefone)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/whatsapp/conversas-com-usuario/:tell',cors(),async function(request,response){
    let telefone = request.params.tell

    let dadosWhats = zap.getConversasDeCadaUsuario(telefone)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/whatsapp/conversas-cada-usuario/cont/:tell',cors(),async function(request,response){
    let telefone = request.params.tell
    let contato = request.query.cont
    
    let dadosWhats = zap.getConversaEContato(telefone,contato)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/whatsapp/conversas-cada-usuario/frase/cont/:tell',cors(),async function(request,response){
    let telefone = request.params.tell
    let palavra = request.query.frase
    let contato = request.query.cont

    let dadosWhats = zap.pesquisaDePalavraChave(telefone,palavra,contato)

    if(dadosWhats){
        response.status(200)
        response.json(dadosWhats)
    }else {
        response.status(404)
        response.json({'status':404,'message':'Não foi possivel encontrar nenhum item de retorno.'})
    }
})




app.listen('8080',function(){
    console.log('API AGUARDANDO REQUISIÇÕES')
})




