using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoCaixaEletronico
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* ATIVIDADE 2: CAIXA ELETRÔNICO

                 CRIE UM PROGRAMA QUE SIMULE UM CAIXA ELETRÔNICO. O USUÁRIO INICIA COM UM SALDO DE R$1000,00 E PODE ESCOLHER ENTRE 
                 SACAR DINHEIRO, DEPOSITAR DINHEIRO OU SAIR. O PROGRAMA SÓ ENCERRA QUANDO O USUÁRIO ESCOLHER SAIR. 

                REGRAS: 

               1. O SAQUE SÓ PODE SER FEITO SE HOUVER SALDO SUFICIENTE. 
               2. O DEPÓSITO PRECISA SER UM VALOR POSITIVO. 
               3. O SALDO DEVE SER EXIBIDO APÓS CADA OPERAÇÃO.    */

            decimal saque=0, deposito, saldo=1000;
            string operacao;

            while (true)
            {
                Console.WriteLine();
                Console.WriteLine("Selecione a operação desejada: \nSAQUE \nSALDO \nDEPOSITO \nSAIR");
                operacao = Console.ReadLine();
                

                switch (operacao.ToUpper())

                {
                    case "SAQUE":

                        Console.WriteLine();
                        Console.WriteLine("Digite o valor a ser sacado: ");
                            saque = Convert.ToDecimal(Console.ReadLine());
                            saldo -= saque;
                        
                        if (saldo >= saque)
                        {
                            Console.WriteLine("Operação realizada com sucesso.");
                            Console.WriteLine($"Seu saldo atual é {saldo.ToString("C")}:");
                            Console.WriteLine();
                            Console.WriteLine("Pressione qualquer tecla para continuar: ");
                        }
                        
                        else if (saldo < 0)
                        {
                            
                            Console.WriteLine($"Valor de saque solicitado: {saque.ToString("C")}");
                            Console.WriteLine($"Operação não realizada. Saldo insuficiente {saldo.ToString("C")}");
                            saldo += saque;
                            Console.WriteLine($"Seu saldo atual é: {saldo.ToString("C")}");
                            Console.WriteLine();
                            Console.WriteLine("Pressione qualquer tecla para continuar: ");
                        }
                        break;
                   
                    case "SALDO":
                        Console.WriteLine($"Seu saldo atual é {saldo.ToString("C")}:");
                        Console.WriteLine();
                        Console.WriteLine("Pressione qualquer tecla para continuar: ");

                        break;

                    case "DEPOSITO":

                        Console.WriteLine("Digite o valor a ser depositado na conta: ");
                        deposito = Convert.ToDecimal(Console.ReadLine());
                        
                        if (deposito>0)
                        {
                            Console.WriteLine($"Foi depositado um total de: {deposito.ToString("C")}");
                            saldo += deposito;
                            Console.WriteLine($"Seu saldo atual é {saldo.ToString("C")}:");
                            Console.WriteLine();
                            Console.WriteLine("Pressione qualquer tecla para continuar: ");
                        }

                        else
                        {
                            Console.WriteLine("Operação inválida. O valor deve ser um número positivo. ");
                            Console.WriteLine($"Seu saldo atual é {saldo.ToString("C")}:");
                        }
                        break;

                    case "SAIR":
                        Environment.Exit(0);
                        break;

                        default:
                        Console.WriteLine("Operação inválida.");
                        Console.WriteLine("Pressione qualquer tecla para continuar: ");

                        break;
                }
                Console.ReadKey();
            }

            

        }
    }
}
