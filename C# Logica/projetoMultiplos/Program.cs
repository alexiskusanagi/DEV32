using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoMultiplos
{
    internal class Program
    {
        static void Main(string[] args)
        {/* 1 exibir os multiplos de uma numero até um limite. peça ao usuário um número (ex: 5) e um limite (ex; 45).
          * em seguida exiba todos os mpultiplos desse número até o limite especificado (de 5 até 45) */

            int numero, limite;

            Console.WriteLine("Digite um número: ");
            numero = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite um limite: ");
            limite = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"Multiplos de {numero} até {limite}");
            for (int i = numero; i <=limite; i+=numero)
            {
                Console.WriteLine(i);

            }
            Console.ReadKey();

        }
    }
}
