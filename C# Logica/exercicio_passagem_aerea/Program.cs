using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercicio_passagem_aerea
{
    public class Program
    {
        static void Main(string[] args)
        {

            

            // declarar variáveis (tipo string -  nome, telefone, etc)
            string nome, telefone, passaporte, rg, endereco;
            // solicitar ao usuário as informações
            /* Console.WriteLine("\nDigite seu nome");
             // capturar os valores
             nome = Console.ReadLine();
             Console.WriteLine("Seu nome é: " + nome);
             Console.WriteLine("\nDigite seu telefone");
             telefone = Console.ReadLine();
             Console.WriteLine("Seu telefone é: " + telefone);
             Console.WriteLine("\nDigite o número do seu passaporte");
             passaporte = Console.ReadLine();
             Console.WriteLine("O número do seu passaporte é: " + passaporte);
             Console.WriteLine("\nDigite o número do seu RG sem pontos ou traço");
             rg = Console.ReadLine();
             Console.WriteLine("Seu RG é: " + rg);
             Console.WriteLine("\nDigite seu endereço");
             endereco = Console.ReadLine();
             Console.WriteLine("Seu endereço é: " + endereco);  */

            Console.WriteLine("\nDigite seu nome");
            nome = Console.ReadLine();
            
            Console.WriteLine("\nDigite seu telefone");
            telefone = Console.ReadLine();
          
            Console.WriteLine("\nDigite o número do seu passaporte");
            passaporte = Console.ReadLine();
          
            Console.WriteLine("\nDigite o número do seu RG sem pontos ou traço");
            rg = Console.ReadLine();
           
            Console.WriteLine("\nDigite seu endereço");
            endereco = Console.ReadLine();

            // exibindo os dados - utilizando a quebra de linha \n (é a barra da esquerda)

            Console.WriteLine("\n***************************");
            Console.WriteLine("Exibindo os dados");
            Console.WriteLine("\nNome: "+nome +"\nTelefone: "+telefone +"\nPassaporte: "+ passaporte + "\nRG: " +rg +"\nEndereço: "+ endereco);

            Console.ReadKey();



        }
    }
}
