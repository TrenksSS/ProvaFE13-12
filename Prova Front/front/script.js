const corpo = document.querySelector(".cont");

fetch("http://localhost:3000/read")
.then(res => { return res.json() })
.then(posts => {
    console.log(posts)
    posts.forEach(post => {
        let novoPost =  document.querySelector(".cha").cloneNode(true)
        novoPost.classList.remove('model');
        novoPost.querySelector("#tipo").innerHTML = post.tipo;
        novoPost.querySelector("#severidade").innerHTML = post.severidade;
        novoPost.querySelector("#descri").innerHTML = post.descricao;
        novoPost.querySelector("#data").innerHTML = post.data;
        novoPost.querySelector("#hora").innerHTML = post.hora;
        novoPost.querySelector("#hora-ini").innerHTML = post.hora_inicio;
        novoPost.querySelector("#hora-fim").innerHTML = post.hora_fim;
        novoPost.querySelector("#destino").innerHTML = post.destino;
        
        corpo.appendChild(novoPost)
    })
})

function remover(id, item) {
    fetch("http://localhost:3000/delete/" + id, {
        "method":"DELETE"
    })
    .then(resp => { return resp})
    .then(data => {
        console.log(data)
        item.remove();
    });
}


function cadastrar() {
    let data = {};

    let body = {
        "tipo": document.getElementById("tipoc").value,
        "severicade": document.getElementById("sevec").value,
        "decricao": document.getElementById("desc").value,
        "destino": document.getElementById("des").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
        fetch("http://localhost:3000/create", options)
            .then(resp => resp.status)
            .then(data => {
                console.log(data)
                if (data == 201) {
                    alert("Chamado cadastrado com sucesso");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados.");
                    // window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados. Erro:" + err));
    }