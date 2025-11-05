nome = input('Digite seu nome: ')
idade = int(input('Digite sua idade:'))
altura = float(input('Digite sua altura: '))
peso = float(input('Digite seu peso: '))

imc = peso/altura**2

print(f"Seu nome é {nome}, sua idade é: {idade}, sua altura é: {altura}, seu IMC é: {imc}")