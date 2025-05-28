using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_If_1
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* trabalhando com if - else
            usuário vai informar nome, idade e telefone
            o sistema vai verificar a idade e liberar a passagem
            se a idade for maior ou igual a 18*/

            //1. Delcarar a variável
            string nome, telefone;
            int idade;
            //2. solicitar (writeline) e capturar valores (readline)
            Console.WriteLine("Nome: ");
            nome = Console.ReadLine();

            Console.WriteLine("Telefone: ");
            telefone = Console.ReadLine();

            idade = Convert.ToInt32(Console.ReadLine());

            //3. Validar a idade (se a idade > ou =18)

            if (idade >=18)
            {
                // se for verdadeiro
                Console.WriteLine("Entrada Liberada");
            }
            else 
            {
                // se for falso
                Console.WriteLine("Entrada com os pais ");
            }

            Console.ReadKey();




        }
    }
}
