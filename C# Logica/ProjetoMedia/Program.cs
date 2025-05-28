using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoMedia
{
    public class Program
    {
        static void Main(string[] args)
        {
            int nota1, nota2, nota3, media;
            Console.WriteLine("Digite a nota 1");
            nota1 =Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite a nota 2");
            nota2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite a nota 3");
            nota3 = Convert.ToInt32(Console.ReadLine());
            media = (nota1 + nota2 + nota3) / 3;

                        
            

            Console.WriteLine("A média das notas é: " +media);

            /* média > ou = 7 aprovado. Caso contrario: reprovado

            if (media >= 7)
            {
                Console.WriteLine("Aprovado");
            }

            else
            {
                Console.WriteLine("Reprovado");
            } */


            // media >= 8 aprovado. 
            // media entre 5 e 7 = recuperação
            // media abaoixo de 5 = reprovado

            if (media >= 8)
            {
                Console.WriteLine("Aprovado");
            }

            else if (media >= 5 && media < 8)
            {
                Console.WriteLine("Recuperação");
            }

            else
            {
                Console.WriteLine("Reprovado");
            }


            Console.ReadKey();




        }
    }
}
