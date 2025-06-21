
function verificarSenha() {
    const senha = document.getElementById('senha').value;
    if (senha === "12345") {
        window.location.href = "guias/mapa.html";
    } else {
        document.getElementById('mensagemErro').innerText = "Senha incorreta. Tente novamente.";
    }
}
