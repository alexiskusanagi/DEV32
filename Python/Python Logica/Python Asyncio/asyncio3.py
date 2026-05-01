"""   Aqui o desafio é não escrever 100 vezes a mesma função. Vamos usar um laço de repetição (for) para criar as tarefas.
O Enunciado:

    Crie uma função enviar_convite(numero).
        Ela deve dar um print(f"Enviando convite {numero}").
        Deve dar um await asyncio.sleep(1) (simulando a lentidão do servidor).
        Deve retornar f"Convite {numero} OK".
    Na função main():
        Crie uma lista vazia chamada tarefas.
        Use um for i in range(1, 101): para preencher essa lista com as chamadas da função: tarefas.append(enviar_convite(i)).
        Use o await asyncio.gather(*tarefas) para disparar todos de uma vez.

O Pulo do Gato:
Note o asterisco * antes da palavra tarefas no gather. Ele serve para "desempacotar" a lista, como se você estivesse tirando os 100 convites da caixa e espalhando-os na mesa do gather.
Se o tempo total der perto de 1 segundo (em vez de 100), você dominou a escala!"""


import asyncio
import time

async def enviar_convite(numero):
    print(f"Enviando convite {numero}")
    await asyncio.sleep(1)
    f"Convite {numero} OK"

async def main():
    inicio = time.perf_counter()
    tarefas = []
    for i in range (1, 101):
        tarefas.append(enviar_convite(i))
    
    resultado = await asyncio.gather(*tarefas)
    
    fim = time.perf_counter()

    print(f"Tempo total: {fim - inicio:.2f} segundos")

asyncio.run(main())