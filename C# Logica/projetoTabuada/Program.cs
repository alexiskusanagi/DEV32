using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace projetoTabuada
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* solicitar um númemro ao usuário e exibir sua tabuada de 1 a 10. 
             


            //1 solicitar um valor inteiro */
            int valorDigitado;
            Console.WriteLine("Digite um número: ");
            // 2. receber o valor do usuário. Essa parte ocorre fora do laço de repetição.
           valorDigitado = Convert.ToInt32(Console.ReadLine());
          
            for (int i =0; i <=10; i ++)
            {
                // exibir a tabuada juntado o número vezes * 6
                Console.WriteLine($"{valorDigitado} x {i}={valorDigitado*i}");
            }

            Console.ReadKey();

        }
    }
}
