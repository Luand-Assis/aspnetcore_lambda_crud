using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using APIVehicleManager.Models;

namespace APIVehicleManager.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CadastroController : ControllerBase
{
    private readonly CadastroService _service;
    public CadastroController(CadastroService service)
    {
        _service = service;
    }

    [HttpPost("cadastro")]
    public IActionResult NovoCadastro([FromBody] CadastroRequest request)
    {
        if (string.IsNullOrEmpty(request.Nome) || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Senha))
        {
            return BadRequest(new { mensagem = $"Todos os campos são obrigatórios." });    
        }

        _service.Adicionar(request);
        return Ok(new { mensagem = $"Usuário {request.Nome} cadastrado com sucesso!" });
    }
}