# Career Automation Agent: ATS Optimization Engine (v1.0)

## Status do Projeto
A **Versão 1.0** foi concluída com sucesso, estabelecendo um Produto Mínimo Viável (MVP) funcional que automatiza a análise de aderência e a geração de documentos customizados.

## Funcionalidades Implementadas
*   **Análise Inteligente de Vagas:** Processamento de descrições de cargos (Job Descriptions) com identificação de palavras-chave e cálculo de *Match Score*.
*   **Dicionário de Sinônimos Técnicos:** Motor preparado para identificar variações terminológicas (ex: .NET, C#, Asp.Net) garantindo precisão na detecção de competências.
*   **Poda Dinâmica de Experiências (Pruning):** Filtro automático que seleciona apenas os blocos de texto do histórico profissional que possuem relevância direta para a vaga analisada.
*   **Geração Automatizada de PDF:** Exportação de currículo otimizado com formatação técnica, utilizando a biblioteca `fpdf2`.
*   **Arquitetura Modular:** Separação clara entre a lógica de análise (`analyser.py`), configurações de privacidade (`dados_privados.py`) e orquestração do sistema (`main.py`).

## Tecnologias e Segurança
*   **Linguagem:** Python 3.x
*   **Bibliotecas:** FPDF2
*   **Segurança:** Implementação de proteção de dados sensíveis via `.gitignore`, garantindo que informações pessoais não sejam expostas em repositórios públicos.

## Próximos Passos (Roadmap Versão 2.0)
1.  **Refinamento Estético:** Implementação de layout avançado para o PDF baseado em modelos profissionais.
2.  **Parser de Entrada:** Leitura automatizada do currículo mestre em formato PDF para alimentação do motor de dados.
3.  **Integração Web (Opcional):** Web scraping de agregadores de vagas para automação da coleta de requisitos.

---
*Desenvolvido como projeto de portfólio para demonstração de competências em Engenharia de Software e Automação. Este projeto faz parte de um ecossistema de ferramentas de produtividade para desenvolvedores em transição de carreira.*

---

