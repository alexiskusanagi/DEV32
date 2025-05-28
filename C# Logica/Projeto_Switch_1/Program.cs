using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projeto_Switch_1
{
    public class Program
    {
        static void Main(string[] args)
        {
            /* trabalhando com switch - case */

            int op;
            string nome;

            Console.WriteLine("Informe o seu nome: ");
            nome = Console.ReadLine();

            Console.WriteLine("Informe o sexo \ndigite 1 para Masculino ou 2 para Feminino");
            op = Convert.ToInt32(Console.ReadLine());

            // atalho switch case => switch tab

            switch (op)
            {
                case 1:
                    Console.WriteLine("Masculino");
                    break;
                case 2:
                    Console.WriteLine("Feminino");
                    break;
                default:
                
                    Console.WriteLine("Escolha uma das duas opções acima.");
                    break;
            }
            Console.ReadKey();
        }
    }
}
