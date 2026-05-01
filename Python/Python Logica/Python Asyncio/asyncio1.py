#equivalente ao hello world do asyncio.

import asyncio

async def dizer_ola():
    print ("Preparando...")
    await asyncio.sleep(2) 
    return "Olá, Mundo Assíncrono"

async def main():
    resultado = await dizer_ola()
    print (resultado)

asyncio.run(main())



"""Por que criamos uma função main?
No mundo real do asyncio, você quase sempre terá uma função principal 
(main) que coordena as outras. O asyncio.run(main()) é o único comando 
"síncrono" que chama o mundo assíncrono.
O que vai acontecer quando você rodar (aperte o Play no VS Code):

    O Python entra no main.
    O main chama o dizer_ola.
    O dizer_ola imprime "Preparando...".
    O await asyncio.sleep(2) avisa ao Python: "Pode descansar por 2 
    segundos, não vou usar o processador agora".
    Após 2 segundos, a função termina, devolve o texto, e o main imprime o resultado."""