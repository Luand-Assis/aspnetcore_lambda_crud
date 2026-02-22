async function logar() {
    const usuario = input_usuario.value;
    const senha = input_senha.value;

    if ((usuario == "" || usuario == undefined) || (senha == "" || senha == undefined)) {
        return alert("Preencha todos os campos.");
    }

    try {
        const response = await fetch("http://localhost:5145/api/Login/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    Usuario: usuario,
                    Senha: senha
                }
            )
        });

        const toJson = await response.json();
        console.log("response: ", toJson);

        const card = document.createElement("div");
        card.textContent = "Entrando...";
        card.style.position = "fixed";
        card.style.top = "20px";
        card.style.left = "50%";
        card.style.transform = "translateX(-50%)";
        card.style.backgroundColor = "#28a745";
        card.style.color = "#fff";
        card.style.padding = "15px 25px";
        card.style.borderRadius = "6px";
        card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        card.style.fontSize = "16px";
        card.style.fontWeight = "500";
        card.style.zIndex = "10000";
        card.style.opacity = "0";
        card.style.transition = "opacity 0.5s";

        document.body.appendChild(card);

        setTimeout(() => card.style.opacity = "1", 50);

        if (response.ok) {
            sessionStorage.setItem("usuarioNome", toJson.usuarioNome);
        }

        console.log("Logando...")
        setTimeout(() => {
            window.location = "painel.html";
        }, 2000)
    } catch (err) {
        console.error(err)
    }
}