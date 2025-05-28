using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace projetoWhile04
{
    public class Program
    {
        static void Main(string[] args)
        {
            int soma = 0;
            int numero;

            Console.WriteLine("digite um número positivo para somar e um negativo para encerrar a operação");



            while (true)

            {
                Console.WriteLine("digite um numero: ");
                numero = Convert.ToInt32(Console.ReadLine());
                
                if (numero < 0)
                    break;

                soma += numero;


            }

            Console.WriteLine($"a soma dos numeros positivos é {soma}");

            Console.ReadKey();



        }
    }
}



