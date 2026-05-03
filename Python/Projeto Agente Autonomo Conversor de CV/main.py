import dados_privados
import analyser
from fpdf import FPDF
import sys

class PDF(FPDF):
    def header(self):
        self.set_font('helvetica', 'B', 16)
        self.cell(0, 10, dados_privados.NOME, align='C', new_x="LMARGIN", new_y="NEXT")
        
        self.set_font('helvetica', '', 10)
        contato = f"{dados_privados.EMAIL} | {dados_privados.TELEFONE} | {dados_privados.LINKEDIN}"
        self.cell(0, 10, contato, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.line(10, 32, 200, 32)
        self.ln(5)

def executar_geracao():
    print("--- Agente de Carreira v1.0 ---")
    print("\nCole o texto da vaga abaixo. Quando terminar, digite 'FIM' em uma nova linha e aperte ENTER:")
    
    linhas = []
    while True:
        linha = input()
        if linha.strip().upper() == "FIM":
            break
        linhas.append(linha)
    
    vaga_input = "\n".join(linhas)


    if not vaga_input.strip():
        print("Erro: Nenhum texto foi detectado.")
        return

    skills, score = analyser.analisar_match_inteligente(vaga_input)
    conteudo = analyser.preparar_conteudo_pdf(skills)

    pdf = PDF()
    pdf.add_page()
    
    # Seção: Resumo
    pdf.set_font('helvetica', 'B', 12)
    pdf.cell(0, 10, "Resumo Profissional", align='L', new_x="LMARGIN", new_y="NEXT")
    pdf.set_font('helvetica', '', 11)
    pdf.multi_cell(0, 7, analyser.RESUMO_GERAL)
    pdf.ln(5)

    # Seção: Experiências
    pdf.set_font('helvetica', 'B', 12)
    pdf.cell(0, 10, "Qualificações Relevantes", align='L', new_x="LMARGIN", new_y="NEXT")
    pdf.set_font('helvetica', '', 11)
    
    for item in conteudo:
        pdf.multi_cell(0, 7, f"- {item}")
        pdf.ln(2)

    pdf.output("Meu_Curriculo_Otimizado.pdf")
    print(f"\n[OK] PDF gerado! Match Score Real: {score}%")

if __name__ == "__main__":
    executar_geracao()
