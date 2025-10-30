# diferente de C#, não existe comando switch case em python, mas é possível adaptar
print("Calculadora com 'Switch Case' Adaptado")


valor_digitado_1=input("Digite o primeiro número ")
valor_1=float(valor_digitado_1)
valor_digitado_2=input("Digite o segundo número ")
valor_2=float(valor_digitado_2)



opcao_digitada=input("Selecione a operação desejada \n1 Soma \n2 Subtração \n3 Multiplicação \n4 Divisão\n") 
if opcao_digitada == "1":
    resultado = valor_1 + valor_2
    print(f"O resultado é: {resultado}")

elif opcao_digitada == "2":
    resultado = valor_1 - valor_2
    print(f"O resultado é: {resultado}")

elif opcao_digitada == "3":
    resultado = valor_1 * valor_2
    print(f"O resultado é: {resultado}")    

elif opcao_digitada == "4":
    if valor_2 == 0:
        print("Operação inválida, não se divide por 0")
    else :   
        resultado = valor_1 / valor_2
        print(f"O resultado é: {resultado}")    