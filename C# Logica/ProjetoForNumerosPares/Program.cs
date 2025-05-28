using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoForNumerosPares
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Objetivo: exibir todos os números pares de 1 a 20
             * dica usar i+=2 ao invés de i++  */

            // sem usar nenhma variável ou dar nenhum comando digitado
            

            for (int i = 2; i <= 20; i+=2)
            {
                Console.WriteLine($"número: {i} ");
            }

            Console.ReadKey();


        }
    }
}
