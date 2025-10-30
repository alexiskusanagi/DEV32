print("--- Calculadora Simples (Versão com While para impedir entrada errada do usuário ---")

while True:
    try:
        valor1_str = input("Digite o primeiro valor: ")
        valor1 = float(valor1_str)
        break
    except ValueError:
        print("Erro: Entrada inválida. Por favor, digite um número.")

while True:
    try:
        valor2_str = input("Digite o segundo valor: ")
        valor2 = float(valor2_str)
        break
    except ValueError:
        print("Erro: Entrada inválida. Por favor, digite um número.")

while True:
    operador = input("Digite o operador (+, -, *, /): ")
    if operador in ['+', '-', '*', '/']:
        break
    else:
        print("Erro: Operador inválido. Por favor, tente novamente.")

resultado = None 

if operador == '+':
    resultado = valor1 + valor2
elif operador == '-':
    resultado = valor1 - valor2
elif operador == '*':
    resultado = valor1 * valor2
elif operador == '/':
    if valor2 == 0:
        print("\nErro: Não é possível dividir por zero.")
    else:
        resultado = valor1 / valor2

if resultado is not None:
    print("-" * 30) #Imprime uma linha para separar as seções contendo 30x o caractere
    print(f"O resultado de {valor1} {operador} {valor2} é: {resultado}")
    print("-" * 30)