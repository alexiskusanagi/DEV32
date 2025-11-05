# Area do Losango = base x altura

print('=============== Cálculo da area do Losango =============== ')

diagonal_maior = float(input('Digite o valor da Diagonal maior \n *Atenção: não pode ser menor que diagonal menor: '))
diagonal_menor = float(input('Digite a Diagonal menor: '))

if diagonal_menor>=diagonal_maior:
    print ('Operação inválida')

else:
    area =  (diagonal_maior * diagonal_menor) /2  
    print("A área do Losango é: {area:.2f}")
