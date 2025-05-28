using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoImpares
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Exibir os npumeros [impares dentro de um  intervalo. peça para o usuário um número inicial e um final.
             * exiba todos os npumeros ímpares dentro desse intervalo  o comando != é "diferente de ="  
             = igual a
             != diferente de:*/

            int numeroInical, numeroFinal;

            Console.WriteLine("Digite um número inicial: ");
            numeroInical =Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite um número final: ");
            numeroFinal =Convert.ToInt32(Console.ReadLine());

            for (int i = numeroInical; i < numeroFinal; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
            Console.ReadKey();
        }
    }
}
