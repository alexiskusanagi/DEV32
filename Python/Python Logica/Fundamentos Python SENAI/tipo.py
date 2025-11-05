#tipo separar com "_" não influencia no print
from operator import truediv


num_inteiro =100_221_001

print(num_inteiro)

'''print(0o123)

O prefixo 0o (zero + letra o) indica que o número está em base octal (8).

O número 0o123 em octal equivale a:

1×82+2×81+3×80=64+16+3=831×82+2×81+3×80=64+16+3=83

Portanto, o comando imprime 83 na tela.

🔹 print(0x123)

O prefixo 0x indica que o número está em base hexadecimal (16).

O número 0x123 em hexadecimal equivale a:

1×162+2×161+3×160=256+32+3=2911×162+2×161+3×160=256+32+3=291

Então, esse comando imprime 291 na tela.

💡 Como comentar a utilidade desses comandos:

Você pode escrever algo assim no seu código:

# Exemplo de uso de diferentes bases numéricas em Python

print(0o123)  # imprime o valor decimal equivalente ao número octal 123 (base 8) → 83
print(0x123)  # imprime o valor decimal equivalente ao número hexadecimal 123 (base 16) → 291


Ou, se for uma explicação mais descritiva (por exemplo, num relatório ou exercício):

O comando print(0o123) demonstra como representar números em base octal em Python, enquanto print(0x123) mostra a 
representação em base hexadecimal. Ambos imprimem seus valores correspondentes em base decimal.'''

print(0o123) #octal

print(0x123) #hexadecimal

#strings com aspas precisa usar \ \ caso contrario dá erro de sintaxe

print("Eu gosto de \"Monty Python\"")


# boolean verdadeiro ou falso

verdadeiro = True #1
falso = False     #0
print(verdadeiro + falso) #1 + 0

