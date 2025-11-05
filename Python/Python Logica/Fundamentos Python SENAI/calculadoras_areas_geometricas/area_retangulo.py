# Area do Retângulo = base x altura

print('=============== Cálculo da area do retângulo =============== ')

base = float(input('Digite o valor da Base \n *Atenção: não pode ser menor que altura: '))
altura = float(input('Digite a altura: '))

if altura>=base:
    print ('Operação inválida')

else:
    area =  base * altura   

    print("A área do Retângulo é: {area:.2f}")



