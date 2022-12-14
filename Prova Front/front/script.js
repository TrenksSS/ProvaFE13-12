const corpo = document.querySelector(".cont");

var modal = document.querySelector(".modal")

function ativar() {
    modal.style = "display:flex"

}
function cancelar() {
    modal.style = "display:none"
}



fetch("http://localhost:3000/read")
    .then(res => { return res.json() })
    .then(posts => {
        posts.forEach(post => {
            let novoPost = document.querySelector(".cha").cloneNode(true)
            novoPost.classList.remove('model');
            novoPost.querySelector("#tipo").innerHTML = post.tipo;
            novoPost.querySelector("#severidade").innerHTML = post.severidade;
            novoPost.querySelector("#descri").innerHTML = post.descricao;
            novoPost.querySelector("#data").innerHTML = post.data;
            novoPost.querySelector("#hora").innerHTML = post.hora;
            novoPost.querySelector("#hora-ini").innerHTML = post.hora_inicio;
            novoPost.querySelector("#hora-fim").innerHTML = post.hora_fim;
            novoPost.querySelector("#destino").innerHTML = post.destino;
            novoPost.querySelector("#deletar").addEventListener("click", () => { remover(post.id, post); })
            // novoPost.querySelector("#alter").addEventListener()
            corpo.appendChild(novoPost)
        })
    })

function remover(id, post) {
    fetch("http://localhost:3000/delete/" + id, {
        "method": "DELETE"
    })
        .then(resp => { return resp })
        .then(data => {
        });
        alert("Chamado deletado 💥")
        window.location.reload();
}


function cadastrar() {
    let data = {};

    let body = {
        "tipo": document.querySelector("#tipoc").value,
        "severidade": document.querySelector("#sevec").value,
        "descricao": document.querySelector("#desc").value,
        "destino": document.querySelector("#des").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    console.log(body)
    fetch("http://localhost:3000/create", options)
        .then(resp => resp.status)
        .then(data => {
            if (data == 201) {
                alert("💨 Chamado cadastrado com sucesso 🥵");
                window.location.reload();
            } else {
                alert("Erro ao enviar dados.💥");
            }
        })
    console.log(body)
        .catch(err => alert("Erro ao enviar dados. Erro:" + err));

}

function alterar() {
    let data = {};

    let body = {
        "tipo": document.querySelector("#tipoc").value,
        "severidade": document.querySelector("#sevec").value,
        "descricao": document.querySelector("#desc").value,
        "destino": document.querySelector("#des").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    console.log(body)
    fetch("http://localhost:3000/create", options)
        .then(resp => resp.status)
        .then(data => {
            if (data == 201) {
                alert("Chamado alterado com sucesso 👌");
                window.location.reload();
            } else {
                alert("Erro ao enviar dados.");
            }
        })
    console.log(body)
        .catch(err => alert("Erro ao enviar dados. Erro:" + err));

}

