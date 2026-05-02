from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 16)
        self.cell(0, 10, 'CURRÍCULO CUSTOMIZADO', 0, 1, 'C')
        self.ln(5)

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255) # Um azulzinho leve
        self.cell(0, 6, title, 0, 1, 'L', 1)
        self.ln(4)

    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 7, body)
        self.ln()

# --- LÓGICA DE GERAÇÃO ---
def criar_arquivo_pdf(encontradas, nome_arquivo="meu_cv_otimizado.pdf"):
    pdf = PDF()
    pdf.add_page()

    # Cabeçalho Fixo (Dados Pessoais)
    pdf.chapter_title("Dados Pessoais")
    pdf.chapter_body("Nome: Seu Nome\nEmail: seu@email.com\nCidade: Ribeirão Preto - SP")

    # Parte Dinâmica: Habilidades Detectadas
    pdf.chapter_title("Habilidades Relevantes para a Vaga")
    texto_skills = "As tecnologias identificadas como essenciais para esta oportunidade são: \n"
    for s in encontradas:
        texto_skills += f"- {s}\n"
    
    pdf.chapter_body(texto_skills)

    # Finalização
    pdf.output(nome_arquivo)
    print(f"PDF gerado com sucesso: {nome_arquivo}")

# Teste manual rápido
criar_arquivo_pdf(['C#', 'SQL', 'Docker'])
