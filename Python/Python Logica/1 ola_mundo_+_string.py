print ("Hello World")


# 1 variaveis de texto (string)
# strings sao definidas com apostrofo 
nome_curso = "T.I. 32"
escola= "Senac Ribeirão Preto"

# A função print() exibe informações no terminal

# A função type() nos mostra qual é o tipo de variável

print("---Manipulando strings---")
print("Nome do curso:", nome_curso)
print("Tipo de variável nome_curso:", type (nome_curso))

# Manipulação: Concatenando Strings
mensagem_completa= nome_curso + " com " + escola 
print ("Mensagem concatenada:" , mensagem_completa)

# Manipulação com f strings (forma moderna e mais legível de formatar strings - muito parecido com $ no C#)
mensagem_formatada =f"Você está fazendo o curso '{nome_curso}' na escola '{escola}'."
print ("Mensagem formatada (f-string):", mensagem_formatada)
print("." * 28) #Imprime uma linha para separar as seções contendo 20x o caractere
