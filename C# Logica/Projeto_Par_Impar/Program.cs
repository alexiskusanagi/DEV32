using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Par_Impar
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* objetivo: verificar se o número é Par ou Ímpar. Para isso, usamos o módulo % - se (valor%2==0) emtão é par, 
             * caso contrario é impar */

            int valor;

            Console.WriteLine("Digite um número: ");
           valor = Convert.ToInt32(Console.ReadLine());

            if (valor % 2 == 0)
            {
                Console.WriteLine("O número é par");
            }

            else
            {
                Console.WriteLine("O número é ímpar");
            }

            Console.ReadKey();


        }
    }
}
