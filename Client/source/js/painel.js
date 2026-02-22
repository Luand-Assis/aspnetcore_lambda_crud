window.onload = () => {
    const nomeUsuario = document.getElementById('span_nome_usuario');
    nomeUsuario.innerHTML = sessionStorage.usuarioNome;

    const horarioElemento = document.getElementById('horario-atual');

    setInterval(() => {
        const dataHora = new Date();
        const horas = String(dataHora.getHours()).padStart(2, '0');
        const minutos = String(dataHora.getMinutes()).padStart(2, '0');
        const segundos = String(dataHora.getSeconds()).padStart(2, '0');
        horarioElemento.innerHTML = `${horas}:${minutos}:${segundos}`;
    })
}

function sair() {
    sessionStorage.setItem("usuarioNome", "");
    window.location = "index.html"
}