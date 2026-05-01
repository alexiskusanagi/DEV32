"""Exercício 4 (O Final): O Semáforo (Controlando a multidão)
Agora, imagine que o servidor de e-mails te ligou bravo e disse: "Ei, você mandou 100 de uma vez e quase derrubou meu sistema! Só aceito 5 por vez!".
Vamos usar o Semaphore para limitar o fluxo, mas manter a velocidade assíncrona.
O Enunciado:

    Crie o semáforo logo abaixo dos import:
    semaforo = asyncio.Semaphore(5)
    Modifique a função enviar_convite para usar o semáforo:"""

import asyncio
import time

semaforo = asyncio.Semaphore(5)

async def enviar_convite(numero):
    async with semaforo: # O convite "pede licença" para o semáforo
        print(f"Enviando convite {numero}...")
        await asyncio.sleep(1)
        return f"Convite {numero} OK"

async def main():
    inicio = time.perf_counter()
    tarefas = []
    for i in range (1, 101):
        tarefas.append(enviar_convite(i))
    
    resultado = await asyncio.gather(*tarefas)
    
    fim = time.perf_counter()

    print(f"Tempo total: {fim - inicio:.2f} segundos")

asyncio.run(main())