using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjetoProximosNumeros
{
    public class Program
    {
        static void Main(string[] args)
        {
            //solicitar um número inteiro e exibir os próximos 7 numeros do numero informado
            int numeroDigitado;
            Console.WriteLine("Digite um número");
            numeroDigitado=Convert.ToInt32(Console.ReadLine());
            for (int i= 1; i <=7; i++) // primeiro 1 comoça, segundo i termina, terceiro i repete até o limite
            {
                Console.WriteLine($"Número: {numeroDigitado + i} ");
            }

            Console.ReadKey();
        }
    }
}
