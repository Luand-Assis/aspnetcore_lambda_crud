async function cadastrar() {
    const nome = input_nome.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const senhaConfirmar = input_senha_confirmar.value;

    if (nome == "" || nome == undefined) return;
    if (email == "" || email == undefined) return;
    if (senha == "" || senha == undefined) return;
    if (senhaConfirmar == "" || senhaConfirmar == undefined) return;
    if (senhaConfirmar != senha) return alert("As senhas não são iguais.");

    try {
        const response = await fetch("http://localhost:5145/api/Cadastro/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    Nome: nome,
                    Email: email,
                    Senha: senha
                }
            )
        });

        const toJson = await response.json()
        console.log(toJson);

        const card = document.createElement("div");
        card.textContent = "Usuário cadastrado com sucesso!";
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

        console.log("Cadastrando...")
        setTimeout(() => {
            window.location = "login.html";
        }, 2000)

    } catch (err) {
        console.error(err);
    }
}