using APIVehicleManager.Models;
using System.Collections.Generic;

public class CadastroService
{
    private readonly List<CadastroRequest> cadastroCache = new List<CadastroRequest>();

    public void Adicionar(CadastroRequest cadastro)
    {
        cadastroCache.Add(cadastro);
    }

    public List<CadastroRequest> Listar()
    {
        return cadastroCache;
    }
}