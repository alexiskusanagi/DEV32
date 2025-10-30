# Calculadora Multi Operação em Python
"""
Esta calculadora permite realizar operações matemáticas como soma, subtração,
multiplicação, divisão, potência e resto. Ideal para praticar estruturas de controle,
funções e tratamento de exceções em Python.

Desenvolvido como projeto de aprendizado.
"""
def somar(a, b):
   # """Esta função retorna a soma de dois números."""
   # em python """existe um tipo de comentário chamario docstring e fica entre 3 aspas, não precisa de # - similar ao /* */ """
    """Soma dois números e retorna o resultado.

    Esta função é um exemplo simples que recebe dois argumentos numéricos
    (podem ser inteiros ou floats) e realiza a operação de adição entre eles.

    Args:
        a (int or float): O primeiro número a ser somado.
        b (int or float): O segundo número a ser somado.

    Returns:
       float: O resultado da soma de 'a' e 'b'.
    """
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Erro: Divisão por zero"
    return a / b

def potencia(a, b):
    return a ** b

def resto(a, b):
    return a % b

def qualquerNumero(frase):
    while True:
        try:
            numero_digitado_srt = input(frase)
            numero_corrigido_str = numero_digitado_srt.replace(',', '.')
            numero = float(numero_corrigido_str)
            return numero
            
        except ValueError:
            print("Erro: Entrada inválida. Por favor, digite um número válido (ex: 10 ou 10,5).")


while True:  
    try:

        menu = """
                Selecione a operação:
                1. Somar
                2. Subtrair
                3. Multiplicar
                4. Dividir
                5. Potência
                6. Resto da Divisão
                7. Sair
                Digite sua escolha: """
        
        opcao_selecionada = int(input(menu))

        if opcao_selecionada == 7:
            print("\nEncerrando a calculadora. Até logo!")
            break

        if opcao_selecionada in [1, 2, 3, 4, 5, 6]:
            numero1 = qualquerNumero("Digite o primeiro número: ")
            numero2 = qualquerNumero("Digite o segundo número: ")

            if opcao_selecionada == 1:
                print("Resultado:", somar(numero1, numero2))
            elif opcao_selecionada == 2:
                print("Resultado:", subtrair(numero1, numero2))
            elif opcao_selecionada == 3:
                print("Resultado:", multiplicar(numero1, numero2))
            elif opcao_selecionada == 4:
                print("Resultado:", dividir(numero1, numero2))
            elif opcao_selecionada == 5:
                print("Resultado:", potencia(numero1, numero2))
            elif opcao_selecionada == 6:
                print("Resultado:", resto(numero1, numero2))
        else:
            print("\nOpção inválida. Por favor, escolha um número de 1 a 7.")
            
    except ValueError:
        print("\nEntrada inválida. Por favor, digite apenas o número da opção.")
        
    print("\n" + "_"*30)
