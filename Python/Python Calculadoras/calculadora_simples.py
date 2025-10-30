print("CALCULADORA")



valor1=input("Digite o primeiro número \n")
numero1=float(valor1) 
operador = input("Digite operador(+,-,*,/):\n")

valor2=input("Digite o segundo número \n")
numero2=float(valor2)
resultado = None

if operador =='+':
    resultado = numero1 + numero2

elif operador == '-':    
    resultado = numero1-numero2

elif operador == '*':    
    resultado = numero1*numero2

elif operador == '/': 
    if numero2==0:
        print("Operação inválida. Não é possível dividir por 0")   

    else:
        resultado = numero1/numero2

if resultado is not None:

    print(f"A operação {numero1} {operador} {numero2} tem resultado de {resultado}")         

