using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class Program
    {

        static void Main(string[] args)
        {
            // objetivo: Solicitar e capturar o nome, sobrenome e exibir na frae: Seu nome completo é: Nome Sobrenome
            // declarar variaveis nome e sobrenome
            String nome, sobrenome;
            // 2 solicitar o nome
            Console.WriteLine("Digite seu nome: ");
            // 3 receber o valor na variável: "nome"
            nome = Console.ReadLine();
            // 4 solicitar o sobrenome
            Console.WriteLine("Digite seu sobrenome: ");
            //5 receber o valor na variável "sobrenome"
            sobrenome = Console.ReadLine();
            // 6 exibir os valores das variáveis
            Console.WriteLine("Seu nome completo é: "+
                nome + " " + sobrenome );

            Console.ReadKey();





        }
    }
}
