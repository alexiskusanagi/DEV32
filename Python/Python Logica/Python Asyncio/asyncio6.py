"""     Boa memória! Agora que você já "sujou as mãos" com o Hello World, os Convites e o Semáforo, aquele exercício dos Sensores da Fábrica vai ser o seu TCC (Trabalho de Conclusão de Curso) do nível 101.
Ele combina tudo o que você aprendeu em um cenário real de monitoramento.
Relembrando o Enunciado: O Monitor de 10 Sensores
Você precisa ler 10 sensores.

    Rede limitada: Apenas 3 sensores podem ser lidos simultaneamente (Semáforo).
    Lentidão: Cada leitura leva 2 segundos (Sleep).
    Segurança: Se um sensor demorar mais que 2.1 segundos, o sistema deve desistir dele e seguir em frente (Timeout).

O Desafio Final (Tente montar sozinho):
Estrutura sugerida para o seu asyncio_final.py:

    Crie o semaforo = asyncio.Semaphore(3).
    Na função ler_sensor(id):
        Use o async with semaforo:.
        Dentro do semáforo, use o asyncio.wait_for(...).
        Lembre-se do try/except asyncio.TimeoutError para o código não travar caso um sensor falhe.
    Na main():
        Crie a lista de 10 tarefas.
        Use o gather.
        Meça o tempo total.

Pergunta de lógica antes de você codar:
Se temos 10 sensores, lemos 3 por vez, e cada rodada leva 2 segundos... qual é 
o tempo total esperado que deve aparecer no seu terminal?
( ) 20 segundos
( ) 6.6 segundos
( ) 8 segundos (Dica: Pense em quantas "viagens" o robô fará para ler grupos de 3)."""