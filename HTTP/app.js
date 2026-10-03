// GET	Buscar dados	Buscar usuário
// POST	Criar algo novo	Criar usuário
// PUT	Atualizar algo existente	Atualizar usuário
// DELETE	Remover algo	Deletar usuário


// async
//   ↓
// await fetch()       → espera a requisição
//   ↓
// await response.json() → espera converter a resposta
//   ↓
// resultado

async function api() {
    const url = "https://api.exemplo.com/users";

    // GET — buscar usuários
    const response = await fetch(url);
    const users = await response.json();

    console.log(users);


    // POST — criar usuário
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Eduardo",
            email: "eduardo@email.com"
        })
    });


    // PUT — atualizar usuário
    await fetch(`${url}/10`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Eduardo Silva",
            email: "novo@email.com"
        })
    });


    // DELETE — deletar usuário
    await fetch(`${url}/10`, {
        method: "DELETE"
    });
}

api();


// Tipos de dados em uma requisicao
// HTTP Request
// │
// ├── Headers
// │   └── informacoes sobre a requisicao
// │
// ├── URL
// │   └── para onde esta indo
// │
// ├── Method
// │   └── GET / POST / PUT / DELETE
// │
// └── Body
//     └── dados enviados


// Request body so tem em post/put/patch/

// Headders (cabecalhos)
// Eles carregam metadados => Informacoes adicionais
// que nao alteram o resultado/funcionamento.
// Posso enviar quanto receber metadados, ex: a localizacao do user.......

HTTP Status Codes
2xx = SUCESSO
3xx = REDIRECIONAMENTO
4xx = ERRO DO CLIENTE
5xx = ERRO DO SERVIDOR - api

