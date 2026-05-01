"""Desafio 1 (Código): O Garçom Assíncrono
Você vai criar duas funções (preparar_cafe e preparar_torrada) e rodá-las dentro da main."""

import asyncio
import time

async def preparar_cafe():
    print("preparano café...")
    await asyncio.sleep(3)
    return "Café pronto!"

async def preparar_torrada():
    print ("Preparando torrada...")
    await asyncio.sleep(5)
    return "Torrada pronta"

async def main():    
    inicio = time.perf_counter()
    resultado = await asyncio.gather(preparar_cafe(), preparar_torrada()) 
    print (resultado)
    fim = time.perf_counter()

    print(f"Tempo total: {fim - inicio:.2f} segundos")

asyncio.run(main())