using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Classificacao_Notas
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* Peça ao usuário para inserir uma nota de 0 a 10 e, com switch - case, classificque a nota como 
             * ruim (0 a 4), regular (5 a 6), bom (7 a 8), ou ótimo (9 a 10)*/

            double nota;

            Console.WriteLine("Digite uma nota entre 0 e 10");
            nota = Convert.ToDouble(Console.ReadLine());


            switch (nota)

            {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    Console.WriteLine("Ruim");
                    break;

                case 5:
                case 6:
                    Console.WriteLine("Regular");
                    break;
                case 7:
                case 8:
                    Console.WriteLine("Bom");
                    break;
                case 9:
                case 10:
                    Console.WriteLine("Ótimo");
                    break;




            }

            Console.ReadKey();

        }
    }
}
