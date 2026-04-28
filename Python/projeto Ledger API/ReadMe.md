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

Use o código com cuidado.
2. Ambiente Python
bash

python -m venv .venv
# Ativação no Windows:
.venv\Scripts\activate
# Instalação de dependências:
pip install "fastapi[all]" sqlalchemy psycopg2-binary

Use o código com cuidado.
3. Inicialização
bash

uvicorn main:app --reload

Use o código com cuidado.
Acesse: http://localhost:8000/docs