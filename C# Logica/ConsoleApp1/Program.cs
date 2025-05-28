using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {

            // comentário para uma linha

            /* comentário para um 
             * 
             * 
             * ou vários paragráfos */

            //solicitar e receber nome, cidade, uf, telefone do usuário
            // 1.declarar variáveis string
            string nome, cidade, uf, telefone;
            // 2. solicitar o nome
            // exibir um texto (console.writeline)
            Console.WriteLine("Informe o seu nome: ");
            // atribuir o texto na variável nome (console.readline - ela lê o que o usuário escreveu)
            nome = Console.ReadLine();

            // atalho console.writeline (c w Tab)
            Console.WriteLine("Informe a sua cidade: ");
            cidade = Console.ReadLine();
            Console.WriteLine("Informe a UF: ");
                uf = Console.ReadLine();
            Console.WriteLine("Informe o telefone: ");
                telefone = Console.ReadLine();

            // exibindo os dados das variáveis (console.writeline + variável = concatenação)
            Console.WriteLine("Seu nome é: "+ nome);
            Console.WriteLine("Você mora na cidade: "+ cidade);
            Console.WriteLine("UF: "+ uf);
            Console.WriteLine("Telefone: " + telefone);

            //paralisar a tela após a exibição
            Console.WriteLine("Pressione qualquer tecla para sair");
            Console.ReadKey();



        }
    }
}
