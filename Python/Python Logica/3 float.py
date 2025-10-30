# variaveis de ponto flutuante (float)
# Floats de números que contém casas decimais. 
preco_produto =49.99
pi=3.14159

print("\n--- manipulando floats")
print(f"preço do produto: R${preco_produto}")
print("Tipo da variável 'preco_produto':", type(preco_produto))

# Manipulação: Multiplicação com um inteiro
quantidade = 3
preco_total = preco_produto * quantidade
# Atenção 2f na f-string para formatar o numero para ter apenas duas casas
print(f"O preco total de {quantidade} unidades é R$ {preco_total:.2f}.")