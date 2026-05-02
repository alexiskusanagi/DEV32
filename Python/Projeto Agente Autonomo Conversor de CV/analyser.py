import dados_privados

meu_perfil = {
    "hard_skills": {
        "Python": ["python", "py", "fastapi", "flask", "django"],
        "C#": ["c#", "c-sharp", "csharp", "dotnet", ".net", "asp.net", "windows forms", "winforms", "programação voltada a objetos"],
        "SQL": ["sql", "postgresql", "postgres", "mysql", "banco de dados", "bancos de dados", "relacional", "relacionais", "modelagem", "queries", "query"],
        "PHP": ["php", "xampp", "laravel"],
        "Web": ["html", "css", "frontend", "ui/ux"],
        "Docker": ["docker", "containers", "containerização"],
        "Git": ["git", "github", "versionamento", "vcs"]
    },
    "idiomas": {
        "Inglês Fluente": ["inglês", "english", "fluent", "advanced", "avançado"]
    },
    "soft-skills": {
        "Comunicação":["comunicação", "organização", "boa comunicação", "trabalho em equipe"],
        "Formulários":["B2B", "relatório", "relatórios", "documentação", "formulário", "formulários"]

    },
    "local": {
        "Ribeirão Preto":["ribeirão preto", "são paulo", "sp", "remoto", "home office"]
    }
    
}

# Esses blocos podem ficar no seu script principal
BLOCOS_EXPERIENCIA = {
    "Python": "Ledger Financeiro: Desenvolvimento de API (FastAPI) com persistência em PostgreSQL e Docker. Foco em precisão decimal e integridade de dados.",
    "C#": "Desenvolvimento Desktop: Criação de sistemas CRUD utilizando C# e Windows Forms, com integração a bancos de dados SQL.",
    "SQL": "Modelagem de Dados: Experiência prática em bancos relacionais (PostgresSQL/MySQL), criação de queries complexas e diagramas ER.",
    "Inglês Fluente": "Formação Internacional: Mais de 12 anos como educador, com foco em comunicação, documentação técnica, mentoria e feedbacks.",
    "PHP": "Desenvolvimento Web: Criação de sites institucionais com arquitetura modular, autenticação e integração com APIs REST.",
    "Docker": "DevOps: Conteinerização de aplicações para garantir paridade entre ambientes.",
    "Formulários": "Análise B2B: Experiência em recuperação de ativos, atuando com análise de bases de dados, relatórios técnicos e documentação de processos."
}

RESUMO_GERAL = "Profissional em transição para TI, unindo sólida bagagem lógica (Filosofia) e comunicação (Inglês) com desenvolvimento Backend."


def analisar_match_inteligente(texto_vaga):
    texto_vaga = texto_vaga.lower()
    skills_confirmadas = []
    pontos = 0
    total_itens = 0

    # Loop Duplo: categoria (ex: hard_skills) -> item (ex: Python)
    for categoria in meu_perfil:
        for item_real, sinonimos in meu_perfil[categoria].items():
            total_itens += 1 # Soma 1 para cada item que existe no perfil mestre
            if any(s in texto_vaga for s in sinonimos):
                skills_confirmadas.append(item_real)
                pontos += 1

    score = (pontos / total_itens) * 100
    return skills_confirmadas, round(score, 2)

def preparar_conteudo_pdf(skills_confirmadas):
    conteudo_para_pdf = []
    
    # Percorrendo todos os textos que temos cadastrados
    for skill, texto in BLOCOS_EXPERIENCIA.items():
        if skill in skills_confirmadas:
            conteudo_para_pdf.append(texto)
            
    return conteudo_para_pdf

# --- TESTE PRÁTICO ---
vaga_linkedin = """Procuramos Dev .NET em Ribeirão Preto. 
Necessário Inglês avançado para leitura de documentação técnica. 
Desejável conhecimento em bancos relacionais e Docker."""

skills, score = analisar_match_inteligente(vaga_linkedin)

# --- EXECUÇÃO ATUALIZADA ---
skills, score = analisar_match_inteligente(vaga_linkedin)
lista_para_escrever = preparar_conteudo_pdf(skills)


print(f"Match Score: {score}%")
print(f"O bot encontrou: {skills}")
print(f"\nConteúdo selecionado para o PDF baseado no Match de {score}%:")
for linha in lista_para_escrever:
    print(f"-> {linha}")




