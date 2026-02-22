# VehicleManager

## Descrição do Projeto

**VehicleManager** é um sistema completo de gerenciamento de veículos, desenvolvido como projeto de estudo e aprendizado. O sistema combina frontend em HTML/CSS/JavaScript com backend em **ASP.NET Core Web API**, integrando serviços da AWS como **Lambda**, **API Gateway**, **Amazon SQS** e futuramento um database **MySQL** e **DynamoBD**.  

O objetivo principal é criar uma aplicação funcional e arquitetural, aplicando conceitos avançados de backend, escalabilidade, desacoplamento e processamento assíncrono.  

O projeto também serve como estudo para crescimento profissional em **desenvolvimento backend**, arquitetura distribuída e integração com serviços cloud.

---

## Funcionalidades

- Cadastro de veículos  
- Listagem e filtragem de veículos  
- Atualização e remoção de registros  
- Integração com banco de dados MySQL e DynamoDB  
- Comunicação assíncrona via AWS SQS  
- Experiência de usuário com interface limpa e responsiva  

---

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** ASP.NET Core Web API  
- **Banco de Dados:** MySQL, DynamoDB  
- **AWS Services:** Lambda, API Gateway, SQS  

---

## Como Executar Localmente

### Pré-requisitos

- [Visual Studio 2022](https://visualstudio.microsoft.com/) ou [VS Code](https://code.visualstudio.com/) com extensão C#  
- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)  
- Atualmente não é necessário de um Banco de Dados pois está sendo armazenado em memória física.

### Passos para executar

   ```bash
   git clone https://github.com/Luand-Assis/aspnetcore_lambda_crud.git
   cd VehicleManager
   dotnet run
   ```
   
**OBS: Considere que SDK e Extensões C# Dev Kit já estão instaladas.**

---

## Autor

### Luan Assis

Projeto de estudo em backend e arquitetura de sistemas.