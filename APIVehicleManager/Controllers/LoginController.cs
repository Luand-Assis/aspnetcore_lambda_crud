using Microsoft.AspNetCore.Mvc;
using APIVehicleManager.Models;

namespace APIVehicleManager.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly CadastroService _service;

    public LoginController(CadastroService service)
    {
        _service = service;
    }

    [HttpPost("login")]
    public IActionResult RealizarLogin([FromBody] LoginRequest request)
    {
        if (string.IsNullOrEmpty(request.Usuario) || string.IsNullOrEmpty(request.Senha))
        {
            return BadRequest(new { mensagem = $"Credenciais vazias." });
        }

        foreach (CadastroRequest usuario in _service.Listar())
        {
            if ((usuario.Nome == request.Usuario || usuario.Email == request.Usuario) && usuario.Senha == request.Senha)
            {
                return Ok(new
                {
                    usuarioNome = usuario.Nome,
                    mensagem = $"Credenciais encontradas. Bem-Vindo {usuario.Nome}"
                });
            }
        }

        return Unauthorized(new { mensagem = $"Credenciais não encontradas." });
    }
}