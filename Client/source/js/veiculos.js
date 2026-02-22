window.onload = () => {
    const nomeUsuario = document.getElementById('span_nome_usuario');
    nomeUsuario.innerHTML = sessionStorage.usuarioNome;
};

function sair() {
    sessionStorage.setItem("usuarioNome", "");
    window.location = "index.html"
}