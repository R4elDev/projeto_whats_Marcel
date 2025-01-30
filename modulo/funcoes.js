const listaDeContatos = require('./contatos.js')

const getDadosPessoaisPorUsuario = function(telefone) {
    let entrada = String(telefone)
    let base = listaDeContatos.contatos.whats_users
    let status = false

    let listaFiltrada = {}

    base.forEach(function(item){
        if(String(item.number) === entrada){
            status = true
            listaFiltrada.id = item.id
            listaFiltrada.conta = item.account
            listaFiltrada.inicio_Da_Conta = item.created_since.start
            listaFiltrada.final_Da_Conta = item.created_since.end
            listaFiltrada.numero = entrada
    
        }

    })

    if(status){
        return listaFiltrada
    }else{
        return false
    }
}

const getDadosContaDoUsuario = function(telefone){
    let entrada = String(telefone)
    let base = listaDeContatos.contatos.whats_users
    let status = false

    let listaFiltrada = {}

    base.forEach(function(item){
        if(String(item.number) === entrada){
            status = true
            listaFiltrada.nick = item.nickname
            listaFiltrada.foto = item.profile_image
            listaFiltrada.corDeFundo = item.background
        }
    })

    if(status){
        return listaFiltrada
    }else{
        return false
    }

}

const getDadosDeContatosParaCadaUsuario = function(telefone){
    let entrada = String(telefone)
    let base = listaDeContatos.contatos.whats_users
    let status = false
    let contatos = []
    base.forEach(function(item){
        if(String(item.number) == entrada){
            status = true

            item.contacts.forEach(function(itemContato){
                let listaFiltrada = {}
                listaFiltrada.nome = itemContato.name
                listaFiltrada.descricao = itemContato.description
                listaFiltrada.imagem = itemContato.image
    
                contatos.push(listaFiltrada)
            })
        }
    })

    if(status){
        return contatos
    }else{
        return false
    }
}

const getConversasDeCadaUsuario = function(telefone){
    let entrada = String(telefone)
    let base = listaDeContatos.contatos.whats_users
    let status = false
    let mensagem = []

    base.forEach(function(item){
        if(String(item.number) == entrada){
            status = true
            mensagem.push(item.contacts)
        }
    })

    if(status){
        return mensagem
    }else{
        return false
    }
}

const getConversaEContato = function(telefone,contato){
    let entrada = String(telefone)
    let segundaEntrada = String(contato)
    let base = listaDeContatos.contatos.whats_users
    let status = false
    let conversas = {
        nome:entrada,
        contato:segundaEntrada,
        mensagens:[],
    }

    base.forEach(function(item){
        item.contacts.forEach(function(itemContato){
            if(String(item.number) === entrada && String(itemContato.name) === segundaEntrada){
                status = true
                conversas.mensagens.push(itemContato.messages)
            }
        })
    })

    if(status){
        return conversas
    }else{
        return false
    }
}

console.log(getConversaEContato('11987876567','Julia Smith'))

