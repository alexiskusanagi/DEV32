using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace media_decimal
{
    internal class Program
    {
        static void Main(string[] args)
        {


            decimal nota1, nota2, nota3, media;
            Console.WriteLine("Digite a nota 1");
            nota1 = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Digite a nota 2");
            nota2 = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Digite a nota 3");
            nota3 = Convert.ToDecimal(Console.ReadLine());
            media = (nota1 + nota2 + nota3) / 3;




            Console.WriteLine("A média das notas é: " + media);

            Console.ReadKey();

        }
    }
}
