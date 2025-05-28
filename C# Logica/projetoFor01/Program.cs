using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoFor01
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* trabalhando com estrutura repetição For. e
             * for = repetição = laços = iteração = loops = voltas
             * 
             para o debug clicar em degug e apertar F10*/

            for (int i = 1; i <= 2; i++) // "i++" é a mesma coisa que i = i + 1
            {
                Console.WriteLine($"Número: {i}");

            }
            Console.ReadKey();
        }
    }
}
