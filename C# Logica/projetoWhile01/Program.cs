using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoWhile01
{
    public class Program
    {
        static void Main(string[] args)
        {/* trabalhando com comando while
          * contagem regressiva  */

            int numero;
            Console.WriteLine("Insira um número: ");
            numero = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            // atalho while: só digitar, while tab tab

            while (numero >= 0)
            {
                Console.WriteLine(numero);
                numero--; // vai decrementar (regredir) a contagem 
            }

            Console.ReadKey();
        }
    }
}
