async function buscaDadosGithub(params) {
    try {
        const response = await fetch('https://api.github.com/users/edunk9999')
        const body = await response.json();
    } catch (error) {
        console.log(error)
    }
}

// viro uma promisse logo ela espera algo
buscaDadosGithub().then(name => {
    console.log(nome)
})