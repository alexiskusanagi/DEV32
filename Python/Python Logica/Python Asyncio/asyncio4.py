"""   Exercício 3 (Código): A Corrida com Timeout
Agora vamos aprender a não deixar o programa travado se um desses convites (ou sensores) der problema.
O Enunciado:

    Mude sua função enviar_convite(numero) para que, apenas se o número for 5, ela demore 10 segundos em vez de 1.
        Dica: if numero == 5: await asyncio.sleep(10) else: await asyncio.sleep(1)
    Na main, envolva a chamada do gather em um asyncio.wait_for.
    Defina o tempo máximo de espera para 2 segundos."""

import asyncio
import time

async def enviar_convite(numero):
    print(f"Enviando convite {numero}")

    if numero == 5:
        await asyncio.sleep(10)

    else:
        await asyncio.sleep(1)
    f"Convite {numero} OK"

async def main():
    inicio = time.perf_counter()
    tarefas = []
    for i in range (1, 101):
        tarefas.append(enviar_convite(i))
    try:
        resultado = await asyncio.wait_for(asyncio.gather(*tarefas), timeout=2.0)
        print("Tudo enviado com sucesso!")

    except asyncio.TimeoutError:
        print("ERRO: O servidor demorou demais e o tempo limite de 2s acabou!")
    
    fim = time.perf_counter()

    print(f"Tempo total: {fim - inicio:.2f} segundos")

asyncio.run(main())