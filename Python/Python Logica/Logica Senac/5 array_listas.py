# 5. listas
# Listas são montadas para armazenar multiplos itens em uma única variável
# Os itens do vetor são ordenados e podem ser de tipos diferentes
frutas = ["maça", "banana", "laranja"]

print("\n --- manipulando listas ---")
print("Lista de frutas inicial:", frutas)
print("Tipo da variável 'frutas':", type(frutas))

# Manipulação: Acessando um item da lista/array
# A contagem de índices em Python (e outras linguagens) começa em 0.
primeira_fruta = frutas[0]
print(f"A primeira fruta da lista é: {primeira_fruta}")

# Manipulação: Adicionando um novo item ao final da lista.
frutas.append("Uva")
print("Lista de frutas após adicionar 'Uva':", frutas)

# Manipulação: Removendo um item da lista.
frutas.remove("Banana")
print("Lista de frutas após remover 'Banana':", frutas)
print("-" * 20) #Imprime uma linha para separar as seções contendo 20x o caractere