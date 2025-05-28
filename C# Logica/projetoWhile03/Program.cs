using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoWhile03
{
    public class Program
    {
        static void Main(string[] args)
        {// trabalhando com Do - While
            // uma calculadora com opção de sair

            int operacao;

            do
            {
                Console.WriteLine("Escolha uma opção: ");
                Console.WriteLine("1 - Soma ");
                Console.WriteLine("2 - Subtração ");
                Console.WriteLine("3 - Multiplicação ");
                Console.WriteLine("4 - Divisão ");
                Console.WriteLine("5 - Sair do Sistema ");
                Console.WriteLine("Opção: ");
                operacao = Convert.ToInt32(Console.ReadLine());

                // verificando operação entre 1 e 4
                if (operacao >= 1 && operacao <= 4)
                {
                    Console.WriteLine("Informe o 1° valor: ");
                    int valor1 = Convert.ToInt32(Console.ReadLine());

                    Console.WriteLine("Informe o 2° valor: ");
                    int valor2 = Convert.ToInt32(Console.ReadLine());

                    int resultado = 0;

                    switch (operacao)
                    {
                        case 1:
                            {
                                resultado = valor1 + valor2;
                                
                            }
                            break;
                        case 2:
                            {
                                resultado += valor1 - valor2;
                                
                                break;
                            }
                        case 3:
                            {
                                resultado = valor1 * valor2;
                                
                                break;
                            }
                        case 4:
                            {
                                if (valor2 != 0)
                                {
                                    resultado = valor1 / valor2;
                                    
                                }
                                else
                                {
                                    Console.WriteLine("Erro, divisão por zero detectada");
                                }

                                break;
                            }

                    }
                    if (operacao !=4 || valor2 != 0)
                    {
                        Console.WriteLine($"Resultado: {resultado}");
                    }
                    else if (operacao != 5)
                    {
                        Console.WriteLine("Opção Inválida, tente novamente.");
                    }

                }



            } while (operacao != 5); //sair

            Console.WriteLine("Saindo...");
            Console.ReadKey();

        }
    }
}
