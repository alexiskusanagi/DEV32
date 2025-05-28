using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabalhoFinalLogicaC_Menu
{
    internal class ClasseTabuadaFibonacci
    {
        private int valor;

        public int multiplicationTableFibonacci()


        {

            Console.Clear();
            int operacao;
           
            Console.WriteLine("Cálculo de Tabuada ou Exibição de Sequência Fibonacci");
            Console.WriteLine("Selecione a operação desejada: \n1. Para efetuar e exibir uma tabela de tabuada \n2. Para exibir os primeiros 25 números de uma sequência Fibonacci \n0. Para retornar ao Menu Anterior");
            operacao = Convert.ToInt32(Console.ReadLine());


            switch (operacao)
            {
                case 0:
                    Console.WriteLine("Retornando ao menu anterior. Presione qualquer tecla para continuar.");
                    return 0;

                case 1:
                    Console.WriteLine("Digite um número: ");
                    valor = Convert.ToInt32(Console.ReadLine());

                    for (int i = 0; i <= 10; i++)
                    {

                        Console.WriteLine($"{valor} x {i}={valor * i}");
                    }
                    break;

                case 2:
                    int numero1, numero2, proximoNumero;
                    Console.WriteLine();
                    numero1 = 0;
                    numero2 = 1;

                    Console.WriteLine(numero1); // para aparecer o 0
                    Console.WriteLine(numero2);// para aparecer o primeiro 1
                    for (int i = 2; i < 25; i++)
                    {
                        proximoNumero = numero1 + numero2; //no primeiro ciclo 0+1, no segundo ciclo 1+2, no terceiro 2+3, no quarto 5+3... etc
                        Console.WriteLine(proximoNumero);
                        numero1 = numero2;
                        numero2 = proximoNumero;

                    }

                    Console.ReadKey();
                    break;

                default:
                    Console.WriteLine("Operação Inválida");
                    break;
            }
            Console.ReadKey();

            return 0;
        }

  
    }
}
