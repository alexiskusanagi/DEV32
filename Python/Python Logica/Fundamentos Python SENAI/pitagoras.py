cateto_oposto = float(input('Cateto Oposto: '))
cateto_adjacente= float(input('Cateto adjacente: '))

hipotenusa = (cateto_oposto**2 + cateto_adjacente**2)**0.5

print(f'Hipotenusa: {hipotenusa:.2f}')