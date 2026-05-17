Financial Ledger API
Descrição do Projeto
Desenvolvimento de uma API de alto desempenho para gestão de livro razão (ledger) financeiro, projetada com foco em integridade de dados e arquitetura escalável. O projeto evoluiu de uma simulação em memória para um sistema com persistência real, capaz de processar e armazenar transações bancárias de forma permanente.
Tecnologias e Decisões de Engenharia
O projeto utiliza Python 3.x e FastAPI com suporte nativo a operações assíncronas (Asyncio). A infraestrutura é sustentada pelo PostgreSQL 15, gerenciado via Docker Compose. A comunicação com o banco é feita através do SQLAlchemy (ORM), utilizando a função get_db com yield para gestão eficiente de conexões. Para garantir precisão monetária, a biblioteca Decimal foi implementada no código e no banco (tipo Numeric), eliminando erros de arredondamento.
Funcionalidades Implementadas

    Documentação Automatizada: Interface interativa via Swagger UI (OpenAPI).
    Criação Dinâmica de Contas: Registro de titulares com identificador único e saldo inicial persistente.
    Consulta de Saldos Reais: Recuperação de estados financeiros via ID da conta com saudação personalizada.
    Simulação de Ledger: Endpoint legado para validação rápida de contratos.

Guia de Instalação e Execução
1. Clonagem e Infraestrutura
bash

# Configurar o banco de dados via Docker
docker-compose up -d

2. Ambiente Python
bash

python -m venv .venv
# Ativação no Windows:
.venv\Scripts\activate
# Instalação de dependências:
pip install "fastapi[all]" sqlalchemy psycopg2-binary

3. Inicialização
bash

uvicorn main:app --reload

Acesse: http://localhost:8000/docs

parte 2



# Financial Ledger API

## Descrição do Projeto
Desenvolvimento de uma API de alto desempenho para gestão de livro razão (ledger) financeiro, projetada com foco em integridade de dados e arquitetura escalável. O projeto evoluiu de uma simulação em memória para um sistema com persistência real em banco de dados e arquitetura modular, isolando as responsabilidades de infraestrutura de dados e rotas para garantir um código limpo e fácil de manter.

## Tecnologias e Decisões de Engenharia
O projeto utiliza Python 3.x e FastAPI com suporte nativo a operações assíncronas (Asyncio) para garantir baixa latência. A infraestrutura é sustentada pelo PostgreSQL 15, gerenciado via Docker Compose para assegurar a reprodutibilidade do ambiente e garantir que os dados financeiros fiquem salvos no disco (SSD) através do uso de Volumes. 

A comunicação entre o código e o banco de dados é feita através do SQLAlchemy (ORM). Para um gerenciamento eficiente de conexões, as rotas utilizam a função `get_db` com o comando `yield`, garantindo que a porta do banco seja aberta apenas quando uma requisição chega e fechada logo em seguida para economizar memória do servidor.

Para garantir a precisão monetária, essencial em Fintechs, a biblioteca Decimal foi implementada tanto no código quanto no banco de dados através do tipo `Numeric(10,2)`, eliminando completamente erros de arredondamento em centavos.

## Organização Arquitetural (Mês 2)
O sistema foi refatorado para seguir o padrão de arquitetura modular de mercado, escondendo o código de aplicação dentro da pasta `app/` para separá-lo das configurações globais (Git, Docker, dependências). 

* **`app/infra/`**: Isola o `database.py` e o `models.py`. O código de negócio não precisa saber como o banco funciona, ele apenas solicita a persistência.
* **`app/api/`**: Contém o arquivo `v1.py`. Desacopla as rotas financeiras do núcleo do servidor usando o `APIRouter` do FastAPI.
* **`app/main.py`**: Atua estritamente como o coordenador e disparador do servidor, mantendo o arquivo limpo e focado em inicializar o sistema.

## Funcionalidades Implementadas
O sistema conta com documentação automatizada via Swagger UI para validação de contratos de API. As funcionalidades incluem:
* **Criação dinâmica de contas reais**: Onde cada titular recebe um identificador único e um saldo inicial persistente no PostgreSQL.
* **Consulta de saldos em tempo real**: Endpoint otimizado para recuperação de estados financeiros reais diretamente do banco por identificador de conta.
* **Endpoint de Health Check**: Uma rota leve para verificar se o serviço está online e se comunicando com o banco de dados com sucesso.

## Guia de Instalação e Execução

### Clonagem do Repositório:
```bash
git clone https://github.com
cd ledger-api
```

### Configuração da Infraestrutura (Docker):
```bash
docker-compose up -d
```

### Configuração do Ambiente Virtual:
```bash
python -m venv .venv
# Ativação no Windows (PowerShell):
.venv\Scripts\activate
```

### Instalação de Dependências:
```bash
pip install "fastapi[all]" sqlalchemy psycopg2-binary
```

### Inicialização do Servidor (Modo Modularizado):
```bash
# Executado sempre a partir do diretório raiz do projeto:
\$env:PYTHONPATH="."; uvicorn app.main:app --reload
```

### Acesso à Interface de Testes:
Acesso à Interface de Testes:
Acesse http://127.0.0.1:8000/docs para interagir com os endpoints documentados