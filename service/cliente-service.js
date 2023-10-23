const apiLink = 'https://my-json-server.typicode.com/viniddantas/api-CRUD/profile/'

const listaClientes = () => {
    return fetch(`${apiLink}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    }) 
} 

const criaCliente = (nome, email) => {
    return fetch(`${apiLink}`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente  ')
    })
}

const removeCliente = (id) => {
    return fetch(`${apiLink}/${id}`, {
        method: 'DELETE'
    })
    .then((resposta) => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover o cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`${apiLink}/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o cliente')
    }) 
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`${apiLink}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente, 
    detalhaCliente,
    atualizaCliente
}