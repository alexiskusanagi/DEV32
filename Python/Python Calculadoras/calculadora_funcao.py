# calculadora que utiliza função() para operações - obter_numero() e obter_operador() 
print("Calculadora python com Funções()")

def obter_numero(fraseInput):
    while True:
        try:
            string = "digite um número " + fraseInput + ": "
            numero_str = input(string)
            numero_float = float(numero_str)
            return numero_float
        except ValueError:
            print("Erro: Entrada inválida. Por favor, digite um número.")

def obter_operador():
    while True:
        operador = input("Digite o operador (+, -, *, /): ")
        if operador in ['+', '-', '*', '/']:
            return operador
        else:
            print("Erro: Operador inválido. Por favor, tente novamente.")

print("--- Calculadora 2 números ---")

valor1 = obter_numero("primeiro")
valor2 = obter_numero("segundo")

operador = obter_operador()


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
    print("-" * 30)
    print(f"O resultado de {valor1} {operador} {valor2} é: {resultado}")
    print("-" * 30)