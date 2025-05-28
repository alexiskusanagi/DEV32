using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Idade
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* criar uma classificação de idade. O programa pede que o usuário insira sua idade.
             * com base na idade informada, o programa classifica a pessoa em uma das seguintes categorias
             *  até 12 anos -> criança
             *  de 13 a 17 anos -> adolescente
             *  de 18 ate 59 anos -> adulto
             *  60 anos ou mais -> idoso 
             
             lembrar de usa && para juntar duas informações no if 
            */

            
            int idade;

            Console.WriteLine("Insira sua idade");
            idade = Convert.ToInt32(Console.ReadLine());

            if (idade <= 12)
            {
                Console.WriteLine("Sua classificação é: criança ");
            }

            else if (idade > 12 && idade <= 17)
            {
                Console.WriteLine("Sua classificação é: adolescente ");
            }

            else if (idade > 17 && idade <= 25)
            {
                Console.WriteLine("Sua classificação é: jovem adulto ");
            }

            else if (idade > 25 && idade <= 38)
            {
                Console.WriteLine("Sua classificação é: adulto cansado ");
            }

            else if (idade > 38 && idade <= 69)
            {
                Console.WriteLine("Sua classificação é: adulto ");
            }

            else 
            {
                Console.WriteLine("Sua classificação é: idoso ");
            }

            Console.ReadKey();





        }
    }
}
